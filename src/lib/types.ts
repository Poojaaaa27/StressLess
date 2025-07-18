export interface User {
    id: string;
    email: string;
    name: string;
    age: number;
    prediction?: Prediction;
  }
  
  export interface Prediction {
    stressLevel: 'Highly Stressed' | 'Stressed' | 'Normal';
    reasons?: string;
    remedies?: string;
    assessedDate: string;
  }
  
