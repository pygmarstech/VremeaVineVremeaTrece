src/
assets/
i18n/
translations.js # Traduceri pentru descrieri meteo
context/
WeatherContext.js # Context global pentru starea aplicației
pages/
HomePage.js # Pagina principală (căutare, favorite, vreme)
HomePage.css
HistoryPage.js # Istoric căutări
HistoryPage.css
SettingsPage.js # Setări (unități, favorite)
SettingsPage.css
services/
weatherService.js # Logica de fetch API OpenWeatherMap
Navigation.js # Bara de navigare principală
App.js # Componentele de bază și rutarea
App.css # Stiluri globale și pentru navigație
index.js # Punctul de intrare
public/
index.html, manifest.json, favicon.ico, logo.png


---

## Arhitectură și flux

- **WeatherContext** gestionează toată starea globală: date meteo, favorite, istoric, unități, oraș căutat, încărcare.
- **weatherService.js** conține logica de interogare a API-ului OpenWeatherMap și transformarea datelor.
- **Pagini principale**:
  - **HomePage**: căutare oraș, afișare vreme, favorite.
  - **HistoryPage**: listă cu ultimele căutări, posibilitate de reafișare rapidă.
  - **SettingsPage**: schimbare unități (C/F), gestionare favorite.
- **Navigare**: realizată cu React Router, meniul principal este în `Navigation.js`.
- **i18n**: traduceri pentru descrierile meteo, ușor de extins pentru alte limbi.
- **Stilizare**: CSS modular, BEM, media queries pentru responsive, utilitare Tailwind disponibile.

---

## Cum rulezi aplicația

1. Instalează dependențele:
   ```bash
   npm install
   ```
2. Pornește aplicația:
   ```bash
   npm start
   ```
3. Accesează în browser: [http://localhost:3000](http://localhost:3000)

---

## Alte detalii

- Aplicația folosește strict Context API pentru state management, fără Redux.
- Poți adăuga ușor noi orașe favorite sau poți schimba unitățile de măsură din setări.
- Istoricul păstrează ultimele 5 căutări.
- Codul este modular și ușor de extins cu noi funcționalități.

---

## Screenshots

*(Adaugă aici capturi de ecran relevante dacă dorești)*

---

## Licență

Acest proiect este open-source și poate fi folosit/modificat liber.
