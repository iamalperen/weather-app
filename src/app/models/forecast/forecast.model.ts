export class Forecast {
  dt!: string;
  weather!: [
    {
      icon: string;
      description: string;
    }
  ];
  main!: {
    temp: string;
  }
}
