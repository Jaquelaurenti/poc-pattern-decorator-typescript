# poc-pattern-decorator-typescript

### Entendendo a estrutura

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