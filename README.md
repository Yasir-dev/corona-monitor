# corona-monitor 🦠

A Node.js CLI application for getting latest stats, news and history charts of corona (COVID-19)

* Get global corona (COVID-19) Statistics :earth_americas:
* Get all countries corona (COVID-19) Statistics :globe_with_meridians:
* Get corona (COVID-19) Statistics for a country :de:
* Get latest corona (COVID-19) news  for a country :newspaper:
* Get corona (COVID-19) timeline chart for a country :bar_chart:

## Installation

```
npm install -g corona-monitor
```

## Usage

### Getting help

```
corona-monitor --help
```

![help](./.github/help.gif)

### Getting help for a command

```
corona-monitor country:stats --help
```
![command-help](./.github/command-help.gif)


### Global stats

```
corona-monitor global:stats
```

![stats-global](./.github/stats-global.gif)

### All countries stats

```
corona-monitor country:stats
```

![stats-country-all](./.github/state-country-all.gif)


### Single country stats

```
corona-monitor country:stats --name germany
```

![stats-country-single](./.github/stats-country-single.gif)


### News for a country

```
corona-monitor country:news --name germany
```

![news-country](./.github/news-country.gif)

### Timeline chart for a country


```
corona-monitor country:timeline --name germany
```

![timeline-country](./.github/timeline-country.gif)

## License

MIT © Yasir Khurshid
