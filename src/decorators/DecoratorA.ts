import  Component  from '../components/Component';

export default class DecoratorA {
  private component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): void {
    this.component.operation();
    console.log('Executando operação do Decorator A.');
  }
}
