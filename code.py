

import re

def extractionHref(texte):
    hrefs = re.findall(r"href=\".+?\"", texte)
    return hrefs

def urlValide(urls):
    urlsValides = []
    for url in urls:
        if re.match(r"https?://(www\.)?\w+\.\w+", url):
            urlsValides.append(url)
    return urlsValides

fichier = open('C://Users/FUJITSU/Desktop/ofppt/python file/POO/test.htm', "r", encoding="utf-8")
texte_fichier = fichier.read()
fichier.close()

liens_href = extractionHref(texte_fichier)
print(liens_href)

urls_valides = urlValide(liens_href)
print(urls_valides)