import  Component from './components/Component';
import DecoratorA from './decorators/DecoratorA';
import  DecoratorB from './decorators/DecoratorB';

// Cria um componente base
const component: Component = new Component();

// Decora o componente com o DecoratorA
const decoratedComponentA: DecoratorA = new DecoratorA(component);
decoratedComponentA.operation();

// Decora o componente com o DecoratorB
const decoratedComponentB: DecoratorB = new DecoratorB(component);
decoratedComponentB.operation();

// Decora o componente com ambos os decoradores
const decoratedComponentAB: DecoratorB = new DecoratorB(decoratedComponentA);
decoratedComponentAB.operation();
