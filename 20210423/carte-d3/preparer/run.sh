# télécharger les données
curl "https://api.openstreetmap.org/api/0.6/map?bbox=6.63738,46.77815,6.64159,46.77977" > bars_yverdon.osm


# convertir en json
osmtogeojson bars_yverdon.osm > bars_yverdon.json

# # extraires les arbres
# node arbres

# # extraires les bâtiments
# node batiments

#extraire les bars
node bars

# extraires les routes
node routes
