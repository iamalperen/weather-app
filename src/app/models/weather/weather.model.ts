export class Weather {
  name!: string
  weather!: [
    {
      icon: string;
      description: string;
    }
  ];
  main!: {
    temp: string;
    humidity: string;
    feels_like: string;
    temp_max: string;
    temp_min: string;
  }
  wind!: {
    speed: number
  }
}
