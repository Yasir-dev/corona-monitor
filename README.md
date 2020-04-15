# corona-monitor

A Node.js CLI application for getting latest stats, news and history charts of corona (COVID-19)

* Get global COVID-19 Statistics
* Get all countries COVID-19 Statistics
* Get COVID-19 Statistics for a country
* Get latest corona news for a country
* Get corona timeline chart for a country

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

![stats-country-all](./github/state-country-all.gif)


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