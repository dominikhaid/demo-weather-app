export default [
  {
    Version: 1,
    Key: '132741_PC',
    Type: 'PostalCode',
    Rank: 75,
    LocalizedName: 'Nieder-Ramstadt',
    EnglishName: 'Nieder-Ramstadt',
    PrimaryPostalCode: '64367',
    Region: {
      ID: 'EUR',
      LocalizedName: 'Europa',
      EnglishName: 'Europe',
    },
    Country: {
      ID: 'DE',
      LocalizedName: 'Deutschland',
      EnglishName: 'Germany',
    },
    AdministrativeArea: {
      ID: 'HE',
      LocalizedName: 'Hessen',
      EnglishName: 'Hesse',
      Level: 1,
      LocalizedType: 'Land',
      EnglishType: 'State',
      CountryID: 'DE',
    },
    TimeZone: {
      Code: 'CEST',
      Name: 'Europe/Berlin',
      GmtOffset: 2,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-25T01:00:00Z',
    },
    GeoPosition: {
      Latitude: 49.809,
      Longitude: 8.692,
      Elevation: {
        Metric: {
          Value: 230,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 754,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    ParentCity: {
      Key: '1004642',
      LocalizedName: 'Nieder-Ramstadt',
      EnglishName: 'Nieder-Ramstadt',
    },
    SupplementalAdminAreas: [
      {
        Level: 2,
        LocalizedName: 'Darmstadt-Dieburg',
        EnglishName: 'Darmstadt-Dieburg',
      },
      {
        Level: 3,
        LocalizedName: 'Mühltal',
        EnglishName: 'Mühltal',
      },
    ],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'ForecastConfidence',
      'FutureRadar',
      'MinuteCast',
      'Radar',
    ],
    Details: {
      Key: '132741_PC',
      StationCode: 'EDFE',
      StationGmtOffset: 1,
      BandMap: 'DL',
      Climo: 'EDDF',
      LocalRadar: '',
      MediaRegion: null,
      Metar: 'EDDF',
      NXMetro: '',
      NXState: '',
      Population: null,
      PrimaryWarningCountyCode: '',
      PrimaryWarningZoneCode: '',
      Satellite: 'EUR3',
      Synoptic: '10639',
      MarineStation: '',
      MarineStationGMTOffset: null,
      VideoCode: '',
      LocationStem: 'de/nieder-ramstadt/64367',
      PartnerID: null,
      Sources: [
        {
          DataType: 'CurrentConditions',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'DailyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'ForecastConfidence',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'FutureRadar',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'HourlyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'MinuteCast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'Radar',
          Source: 'Deutscher Wetterdienst',
          SourceId: 6,
        },
        {
          DataType: 'Alerts',
          Source: 'Deutscher Wetterdienst',
          SourceId: 6,
        },
        {
          DataType: 'AirQualityCurrentConditions',
          Source: 'Plume Labs',
          SourceId: 63,
        },
        {
          DataType: 'AirQualityForecasts',
          Source: 'Plume Labs',
          SourceId: 63,
        },
      ],
      CanonicalPostalCode: '64367',
      CanonicalLocationKey: '1004642',
    },
  },
  {
    Version: 1,
    Key: '215561_PC',
    Type: 'PostalCode',
    Rank: 500,
    LocalizedName: '',
    EnglishName: 'La Esperanza',
    PrimaryPostalCode: '64367',
    Region: {
      ID: 'NAM',
      LocalizedName: 'Nordamerika',
      EnglishName: 'North America',
    },
    Country: {
      ID: 'MX',
      LocalizedName: 'Mexiko',
      EnglishName: 'Mexico',
    },
    AdministrativeArea: {
      ID: 'NLE',
      LocalizedName: 'Nuevo León',
      EnglishName: 'Nuevo León',
      Level: 1,
      LocalizedType: 'Staat',
      EnglishType: 'State',
      CountryID: 'MX',
    },
    TimeZone: {
      Code: 'CDT',
      Name: 'America/Monterrey',
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-25T07:00:00Z',
    },
    GeoPosition: {
      Latitude: 25.433,
      Longitude: -99.933,
      Elevation: {
        Metric: {
          Value: 310,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 1018,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'ForecastConfidence',
      'Radar',
    ],
    Details: {
      Key: '215561_PC',
      StationCode: 'MX0066',
      StationGmtOffset: -6,
      BandMap: 'MX',
      Climo: 'MMMY',
      LocalRadar: '',
      MediaRegion: null,
      Metar: 'MMMY',
      NXMetro: '',
      NXState: 'TXS',
      Population: null,
      PrimaryWarningCountyCode: '',
      PrimaryWarningZoneCode: '',
      Satellite: 'TXS',
      Synoptic: '76393',
      MarineStation: '',
      MarineStationGMTOffset: null,
      VideoCode: '',
      LocationStem: 'mx/la-esperanza/64367',
      PartnerID: null,
      Sources: [
        {
          DataType: 'CurrentConditions',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'DailyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'ForecastConfidence',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'HourlyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'Radar',
          Source: 'U.S. National Weather Service',
          SourceId: 2,
        },
        {
          DataType: 'AirQualityCurrentConditions',
          Source: 'Plume Labs',
          SourceId: 63,
        },
        {
          DataType: 'AirQualityForecasts',
          Source: 'Plume Labs',
          SourceId: 63,
        },
      ],
      CanonicalPostalCode: '64367',
      CanonicalLocationKey: '215561_PC',
    },
  },
];