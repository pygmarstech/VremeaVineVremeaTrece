
const weatherDescriptionTranslations = {
  'clear sky': 'cer senin',
  'few clouds': 'câteva nori',
  'scattered clouds': 'nori împrăștiați',
  'broken clouds': 'nori fragmentați',
  'overcast clouds': 'complet înnorat',
  'light rain': 'ploaie ușoară',
  'moderate rain': 'ploaie moderată',
  'heavy rain': 'ploaie abundentă',
  'thunderstorm': 'furtună',
  'snow': 'ninsoare',
  'mist': 'ceață',
  'fog': 'ceață densă',
  'haze': 'ceață ușoară'
};

export function translateWeatherDescription(description) {
  return weatherDescriptionTranslations[description.toLowerCase()] || description;
}

export default weatherDescriptionTranslations; 