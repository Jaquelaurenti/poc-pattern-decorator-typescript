# poc-pattern-decorator-typescript
### Instalando e Testando a aplicação

```
npm install
```
```
npm run build
```
```
npm run start
```

Após rodar o comando acima, visualize o console log e veja a execução dos componentes

```
Executando operação do componente base.
Executando operação do Decorator A.
Executando operação do componente base.
Executando operação do Decorator B.
Executando operação do componente base.
Executando operação do Decorator A.
Executando operação do Decorator B.
```
### Entendendo a estrutura das pastas desta aplicação

- src: Pasta raiz do projeto.
- src/components: Pasta para os componentes principais.
- src/decorators: Pasta para os decoradores.
- src/main.ts: Arquivo principal que executará o código.


### O que é a classe Component?
A classe Component é a classe base para todos os componentes que queremos decorar. Ela possui um método chamado "operation" que será decorado pelos decoradores.

### O que são os decorators?
Os decoradores DecoratorA e DecoratorB estendem o comportamento da classe Component adicionando funcionalidades extras ao método "operation".


### E o arquivo main.ts ?
Este arquivo principal cria uma instância do componente base e, em seguida, cria instâncias dos decoradores DecoratorA e DecoratorB, passando o componente base como argumento para o construtor. Em seguida, os métodos "operation" são chamados nas instâncias dos decoradores.

### Quando esse pattern é útil?
Decorator é útil em situações em que você precisa adicionar comportamentos ou funcionalidades adicionais a um objeto existente de forma flexível e dinâmica, sem modificar sua estrutura original.

### Exemplos de utilidades
Adicionar funcionalidades em tempo de execução: O Decorator permite adicionar responsabilidades extras a um objeto em tempo de execução, sem a necessidade de alterar sua estrutura. Isso é especialmente útil quando você tem um objeto base que precisa ser estendido com funcionalidades adicionais de forma dinâmica.

Estender classes sem herança excessiva: O Decorator evita a necessidade de criar uma hierarquia de subclasses para cada combinação de funcionalidades. Em vez disso, você pode usar decoradores para adicionar as funcionalidades necessárias de forma independente, evitando uma herança excessiva e complexa.

Permitir a combinação flexível de comportamentos: Com o Decorator, você pode combinar diferentes decoradores para adicionar funcionalidades em diferentes combinações. Isso permite uma grande flexibilidade na criação de objetos com comportamentos específicos, conforme necessário.

Separar responsabilidades: O Decorator ajuda a manter cada responsabilidade separada em decoradores individuais. Isso facilita a compreensão e a manutenção do código, pois cada decorador é responsável por uma única responsabilidade.

Adicionar funcionalidades de terceiros: O Decorator também é útil quando você deseja adicionar funcionalidades fornecidas por bibliotecas de terceiros a um objeto existente. Em vez de modificar diretamente a classe do objeto, você pode encapsular o objeto com decoradores que fornecem a funcionalidade desejada.

### Benefícios em utilizar o Decorator

Extensibilidade: O Decorator permite adicionar responsabilidades extras a um objeto de forma flexível e modular, sem modificar sua estrutura original. Isso significa que você pode estender as funcionalidades de um objeto existente sem a necessidade de criar subclasses adicionais ou modificar o código existente. Isso torna o sistema mais extensível e facilita a adição de novos comportamentos.

Flexibilidade: O Decorator permite a combinação dinâmica de comportamentos através da composição de objetos decoradores. Você pode adicionar ou remover decoradores em tempo de execução, conforme necessário. Isso oferece uma grande flexibilidade na criação de objetos com diferentes combinações de funcionalidades, permitindo ajustar o comportamento do objeto de forma granular.

Manutenção e reutilização de código: O Decorator ajuda a manter as responsabilidades separadas e coesas. Cada decorador é responsável por uma única responsabilidade adicional. Isso torna o código mais modular e de fácil manutenção, pois cada decorador pode ser desenvolvido, testado e mantido independentemente. Além disso, os decoradores podem ser facilmente reutilizados em diferentes contextos, pois são componentes independentes.

Transparência: O Decorator permite que os objetos decorados se comportem de maneira transparente em relação aos objetos não decorados. Isso significa que o cliente que utiliza um objeto decorado não precisa se preocupar com a presença de decoradores, pois eles agem como o objeto base. Isso simplifica o uso e a interação com objetos decorados.

Segregação de responsabilidades: O Decorator permite que você adicione responsabilidades extras a um objeto de forma seletiva. Isso evita a criação de classes monolíticas que realizam muitas tarefas diferentes. Em vez disso, você pode dividir as responsabilidades em decoradores individuais, o que resulta em um código mais limpo e de fácil compreensão.
