# Script completo desde la lectura del archivo hasta la generación del código web

import pandas as pd
import os, re

# 1. Leer el archivo Excel
file_path = "../../../Datos pisos alquiler/Gracia/base_datos_acumulativa.xlsx"
data = pd.read_excel(file_path)

# 2. Procesar y preparar los datos para los gráficos

# Filtrar valores atípicos
def compute_iqr_limits(series):
    Q1 = series.quantile(0.25)
    Q3 = series.quantile(0.75)
    IQR = Q3 - Q1
    lower_limit = Q1 - 1.5 * IQR
    upper_limit = Q3 + 1.5 * IQR
    return lower_limit, upper_limit


# Dividir los datos en pisos alquilados y pisos pendientes de alquilar
alquilados = data.dropna(subset=['Fecha de Salida'])
pendientes = data[data['Fecha de Salida'].isna()]

# 1. Distribución de precios
def get_precio_distribution(data):
    precio_lower, precio_upper = compute_iqr_limits(data['Precio'])
    data_filtered = data[(data['Precio'] >= precio_lower) & (data['Precio'] <= precio_upper)]
    bins_precio = range(600, 4200, 300)
    hist_precio_binned = pd.cut(data_filtered['Precio'], bins=bins_precio, right=False).value_counts().sort_index()
    return hist_precio_binned.values.tolist(), [str(interval) for interval in hist_precio_binned.index]

# 2. Distribución de metros cuadrados
def get_m2_distribution(data):
    m2_lower, m2_upper = compute_iqr_limits(data['m2'])
    data_filtered = data[(data['m2'] >= m2_lower) & (data['m2'] <= m2_upper)]
    bins_m2 = range(20, 150, 10)
    hist_m2_binned = pd.cut(data_filtered['m2'], bins=bins_m2, right=False).value_counts().sort_index()
    return hist_m2_binned.values.tolist(), [str(interval) for interval in hist_m2_binned.index]

# 3. Distribución del precio por metro cuadrado
def get_precio_m2_distribution(data):
    data_filtered = data.copy()
    data_filtered['Precio_m2'] = data_filtered['Precio'] / data_filtered['m2']
    bins_precio_m2 = range(10, 40, 2)
    hist_precio_m2_binned = pd.cut(data_filtered['Precio_m2'], bins=bins_precio_m2, right=False).value_counts().sort_index()
    return hist_precio_m2_binned.values.tolist(), [str(interval) for interval in hist_precio_m2_binned.index]

# 4. Precio promedio por barrio
def get_avg_precio_barrio(data):
    precio_promedio_barrio = data.groupby('Barrio')['Precio'].mean().sort_values(ascending=False)
    return round(precio_promedio_barrio, 2).values.tolist()

# 5. Distribución de pisos por barrio
def get_barrio_distribution(data):
    barrio_distribution = data['Barrio'].value_counts()
    return barrio_distribution.values.tolist(), barrio_distribution.index.tolist()


# Calcular las variables para los pisos alquilados
alquilados_values_precio, alquilados_keys_precio = get_precio_distribution(alquilados)
alquilados_values_m2, alquilados_keys_m2 = get_m2_distribution(alquilados)
alquilados_values_precio_m2, alquilados_keys_precio_m2 = get_precio_m2_distribution(alquilados)
alquilados_values_barrio = get_avg_precio_barrio(alquilados)
alquilados_values_barrio_dist, alquilados_keys_barrio_dist = get_barrio_distribution(alquilados)

# Calcular las variables para los pisos pendientes de alquilar
pendientes_values_precio, pendientes_keys_precio = get_precio_distribution(pendientes)
pendientes_values_m2, pendientes_keys_m2 = get_m2_distribution(pendientes)
pendientes_values_precio_m2, pendientes_keys_precio_m2 = get_precio_m2_distribution(pendientes)
pendientes_values_barrio = get_avg_precio_barrio(pendientes)
pendientes_values_barrio_dist, pendientes_keys_barrio_dist = get_barrio_distribution(pendientes)



#Gráfico entradas y salidas

# Convertir las columnas de fecha a formato datetime
data['Fecha de Entrada'] = pd.to_datetime(data['Fecha de Entrada'], errors='coerce', dayfirst=True)
data['Fecha de Salida'] = pd.to_datetime(data['Fecha de Salida'], errors='coerce', dayfirst=True)

# Contar el número de pisos añadidos y retirados por fecha
pisos_entrada = data['Fecha de Entrada'].value_counts().sort_index()
pisos_salida = data['Fecha de Salida'].value_counts().sort_index()

# Preparar los datos para el gráfico de pisos añadidos y retirados
data_values_entrada = pisos_entrada.values.tolist()
data_keys_entrada = [str(date)[:10] for date in pisos_entrada.index]

data_values_salida = pisos_salida.values.tolist()
data_keys_salida = [str(date) for date in pisos_salida.index]


# Buscamos en el histórico de pisos alquilados el numero de pisos en la web. Hacemos una serie histórica

# Ruta del directorio
dir_path = "C:/Users/XavierPuntí/Desktop/Xavi/Mapa Dinámico/Datos pisos alquiler/Gracia/Pisos Alquilados"

# Listar todos los archivos en el directorio
files = os.listdir(dir_path)
data_num_pisos_en_alquiler = []


#Hay que ordenar los archivos cronologicamente

def extract_date(file_name):
    date_str = re.search(r'\d{2}\.\d{2}\.\d{4}', file_name).group()
    return pd.to_datetime(date_str, format='%d.%m.%Y')

# Ordenar la lista de archivos usando la función extract_date como clave
sorted_files = sorted(files, key=extract_date)



for file in sorted_files:
        file_path = os.path.join(dir_path, file)
        df = pd.read_excel(file_path)
        
        # Contar el número de filas sin contar el índice
        num_rows = df.shape[0]
        data_num_pisos_en_alquiler.append(df.shape[0])
        


#Generar estadísticas acerca de los pisos que han aumentado/disminuido su precio desde que tenemos registro


# Load the log data
df_log = pd.read_excel("C:/Users/XavierPuntí/Desktop/Xavi/Mapa Dinámico/Datos pisos alquiler/Gracia/precio_log_mensual.xlsx")

# Convert 'Fecha' column to datetime format and sort by it
df_log['Fecha'] = pd.to_datetime(df_log['Fecha'], format='%d/%m/%Y')
df_log = df_log.sort_values(by='Fecha')

# Determine the last available date in the log
last_date = df_log['Fecha'].max()

# Load the cumulative database
df_cumulative = pd.read_excel("C:/Users/XavierPuntí/Desktop/Xavi/Mapa Dinámico/Datos pisos alquiler/Gracia/base_datos_acumulativa.xlsx")

# Extract district information for each id
district_mapping = df_cumulative[['id', 'Barrio']].drop_duplicates()

# Merge the district information with the log data
df_log = df_log.merge(district_mapping, on='id', how='left')

# Filter properties that have a price on the last available date
last_date_prices = df_log[df_log['Fecha'] == last_date]

# Calculate price variations
df_increased = df_log[df_log['id'].isin(last_date_prices['id'])].groupby('id').apply(lambda group: (group['Precio'].iloc[-1] - group['Precio'].iloc[0]) / group['Precio'].iloc[0]).reset_index()
df_increased.columns = ['id', 'Variation']

# Define thresholds for price variation
def categorize_variation(variation):
    if abs(variation) <= 0.05:
        return "Menores o igual al 5%"
    elif 0.05 < abs(variation) <= 0.10:
        return "Entre el 5% y el 10%"
    else:
        return "Mayores al 10%"

df_increased['Category'] = df_increased['Variation'].apply(categorize_variation)

# Merge with the log data to get district information
df_increased = df_increased.merge(df_log[['id', 'Barrio']].drop_duplicates(), on='id', how='left')

# Count properties by price variation category and district
increased_counts_new = df_increased[df_increased['Variation'] > 0].groupby(['Barrio', 'Category']).size().unstack().fillna(0)
increased_counts_new['Total'] = increased_counts_new.sum(axis=1)
decreased_counts_new = df_increased[df_increased['Variation'] < 0].groupby(['Barrio', 'Category']).size().unstack().fillna(0)
decreased_counts_new['Total'] = decreased_counts_new.sum(axis=1)
# Convert the data to JSON
district_id_mapping = {
    "El Camp d'en Grassot i Gràcia Nova": 32,
    "Vila de Gràcia": 31,
    "Vallcarca i els Penitents": 28,
    "El Coll": 29,
    "La Salut": 30
}

# Orden específico para las categorías
ordered_categories = ['Menores o igual al 5%', 'Entre el 5% y el 10%', 'Mayores al 10%']

def convert_to_nested_json():
    json_data = {}
    for district, district_id in district_id_mapping.items():
        json_data[str(district_id)] = {  # Convert district_id to string to match your given JSON structure
            "name": district,
            "increase": {},
            "decrease": {}
        }
        
        # Añade las categorías en el orden específico para 'increase'
        for category in ordered_categories:
            if district in increased_counts_new.index and category in increased_counts_new.loc[district]:
                json_data[str(district_id)]["increase"][category] = int(increased_counts_new.loc[district][category])
                
        # Añade las categorías en el orden específico para 'decrease'
        for category in ordered_categories:
            if district in decreased_counts_new.index and category in decreased_counts_new.loc[district]:
                json_data[str(district_id)]["decrease"][category] = int(decreased_counts_new.loc[district][category])

    return json_data

nested_json = convert_to_nested_json()

# 3. Generar el código HTML/JS para ApexCharts

# Crear el código HTML/JS
web_code_all_graphs = f"""

 // Gráfico de distribución del precio
 
 // Variables para los gráficos de los pisos alquilados
var alquilados_values_precio = {alquilados_values_precio};
var alquilados_keys_precio = {alquilados_keys_precio};
var alquilados_values_m2 = {alquilados_values_m2};
var alquilados_keys_m2 = {alquilados_keys_m2};
var alquilados_values_precio_m2 = {alquilados_values_precio_m2};
var alquilados_keys_precio_m2 = {alquilados_keys_precio_m2};
var alquilados_values_barrio = {alquilados_values_barrio};
var alquilados_values_barrio_dist = {alquilados_values_barrio_dist};
var alquilados_keys_barrio_dist = {alquilados_keys_barrio_dist};

// Variables para los gráficos de los pisos pendientes de alquilar
var pendientes_values_precio = {pendientes_values_precio};
var pendientes_keys_precio = {pendientes_keys_precio};
var pendientes_values_m2 = {pendientes_values_m2};
var pendientes_keys_m2 = {pendientes_keys_m2};
var pendientes_values_precio_m2 = {pendientes_values_precio_m2};
var pendientes_keys_precio_m2 = {pendientes_keys_precio_m2};
var pendientes_values_barrio = {pendientes_values_barrio};
var pendientes_values_barrio_dist = {pendientes_values_barrio_dist};
var pendientes_keys_barrio_dist = {pendientes_keys_barrio_dist};


var values_entrada = {data_values_entrada[1:]} 
var values_salida = {data_values_salida}
var num_pisos_en_alquiler = {data_num_pisos_en_alquiler[1:]}
var keys_entrada = {data_keys_entrada[1:]}
var json_aumento_decrementos_barrios = {nested_json}

"""