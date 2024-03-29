const API_KEY = '3c1cd2cf-20e8-4754-a2e3-97be882752b4';
// Get information
const getCountries = async () => {
	try {
		const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`;
		const res = await fetch(url);
		const data = await res.json();
        console.log("countries", data)
		return data;
	} catch (err) {
		console.log('err', err);
	}
};
const getLanguages = async () => {
	try {
		const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`;
		const res = await fetch(url);
		const data = await res.json();
		console.log('languages', data);
		return data;
	} catch (err) {
		console.log('err', err);
	}
};
const getHolidays = async ({ country, year, month, day, language, search }) => {
	try {
		let countryQuery = ''; //require
		let yearQuery = ''; //require
		let monthQuery = '';
		let dayQuery = '';
		let languageQuery = '';
		let searchQuery = '';
		if (country) {
			countryQuery = `&country=${country}`;
		}
		if (year) {
			yearQuery = `&year=${year}`;
		}
		if (month) {
			monthQuery = `&month=${month}`;
		}
		if (day) {
			dayQuery = `&day=${day}`;
		}
		if (language) {
			languageQuery = `&language=${language}`;
		}
		if (search) {
			searchQuery = `&search=${search}`;
		}
		let query = `${yearQuery}${countryQuery}${monthQuery}${dayQuery}${languageQuery}${searchQuery}`;
		const url = `https://holidayapi.com/v1/holidays?pretty${query}&key=${API_KEY}`;
		console.log('url', url);
		const res = await fetch(url);
		const data = await res.json();
		console.log("holidays",data);
		return data;
	} catch (err) {
		console.log('err', err);
	}
};
const getNextWorkingDay = async (startDate, days) => {
	try {
		const url = `https://holidayapi.com/v1/workday?pretty&country=VN&start=${startDate}&days=${days}&key=${API_KEY}`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log('err', err);
	}
};
const getWorkDays = async (startDate, endDate) => {
	try {
		const url = `https://holidayapi.com/v1/workdays?pretty&country=VN&start=${startDate}&end=${endDate}&key=${API_KEY}`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.log('err', err);
	}
};

//Render data
const renderCountries = async () => {
	try {
		const countriesList = document.getElementById('countries-list');
		const ulCountriesList = countriesList.children[2];
		ulCountriesList.innerHTML = '';
		const data = await getCountries();
		data.countries.forEach((country, index) => {
			const x = document.createElement('li');
			x.innerHTML = `<div class="bullet">${index + 1}</div><div class="li-wrapper"><div class="li-title">${country.name}</div><div class="li-text">Code: ${country.code}</div></div>`;
			ulCountriesList.appendChild(x);
		});
	} catch (err) {
		console.log('err', err);
	}
};


const renderLanguages = async () => {
	try {
        const languagesList = document.getElementById('languages-list');
        const ulLanguagesList = languagesList.children[2];
		ulLanguagesList.innerHTML = '';
		const data = await getLanguages();
		data.languages.forEach((language, index) => {
			const x = document.createElement('li');
			x.innerHTML = `<div class="bullet">${index + 1}</div><div class="li-wrapper"><div class="li-title">${language.name}</div><div class="li-text">Code: ${language.code}</div></div>`;
			ulLanguagesList.appendChild(x);
		});
	} catch (err) {
		console.log('err', err);
	}
};



const renderHolidays = async () => {
	try {
        const holidaysList = document.getElementById('holidays-list');
        const ulHolidaysList = holidaysList.children[1];
		ulHolidaysList.innerHTML = '';
		const data = await getHolidays({ country: countryQuery, year: yearQuery, month: monthQuery, day: dayQuery, language: languageQuery, search: searchQuery });
		data.holidays.forEach((holiday, index) => {
			const x = document.createElement('li');
			x.innerHTML = `<div class="bullet">${index + 1}</div><div class="li-wrapper"><div class="li-title">${holiday.name}</div><div class="li-text">${holiday.weekday.date.name} - ${
				holiday.date
			}</div></div>`;

			ulHolidaysList.appendChild(x);
		});
	} catch (err) {
		console.log('err', err);
	}
};

//Handle event

let searchQuery = null;
let yearQuery = 2020;
let dayQuery = null;
let countryQuery = 'VN';
let languageQuery = null;
let monthQuery = null;

document.getElementById('countries-list-btn').addEventListener('click', () => renderCountries());
document.getElementById('languages-list-btn').addEventListener('click', () => renderLanguages());
document.getElementById('holidays-btn').addEventListener('click', () => renderHolidays());
document.getElementById('month-query').addEventListener('change', (e) => monthQuery = e.target.value);
document.getElementById('search-query').addEventListener('change', (e) => searchQuery = e.target.value);
document.getElementById('year-query').addEventListener('change', (e) => yearQuery = e.target.value);
document.getElementById('day-query').addEventListener('change', (e) => dayQuery = e.target.value);
document.getElementById('country-query').addEventListener('change', (e) => countryQuery = e.target.value);
document.getElementById('language-query').addEventListener('change', (e) => languageQuery = e.target.value);
