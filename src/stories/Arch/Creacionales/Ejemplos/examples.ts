export const DESIGN_PATTERNS = {
  FACTORY_METHOD: `/**
    * The Creator class declares the factory method that is supposed to return an
    * object of a Product class. The Creator's subclasses usually provide the
    * implementation of this method.
    */
   abstract class Creator {
       /**
        * Note that the Creator may also provide some default implementation of the
        * factory method.
        */
       public abstract factoryMethod(): Product;
   
       /**
        * Also note that, despite its name, the Creator's primary responsibility is
        * not creating products. Usually, it contains some core business logic that
        * relies on Product objects, returned by the factory method. Subclasses can
        * indirectly change that business logic by overriding the factory method
        * and returning a different type of product from it.
        */
       public someOperation(): string {
           // Call the factory method to create a Product object.
           const product = this.factoryMethod();
           // Now, use the product.
           return \`Creator: The same creator's code has just worked with \${product.operation()}\`;
       }
   }
   
   /**
    * Concrete Creators override the factory method in order to change the
    * resulting product's type.
    */
   class ConcreteCreator1 extends Creator {
       /**
        * Note that the signature of the method still uses the abstract product
        * type, even though the concrete product is actually returned from the
        * method. This way the Creator can stay independent of concrete product
        * classes.
        */
       public factoryMethod(): Product {
           return new ConcreteProduct1();
       }
   }
   
   class ConcreteCreator2 extends Creator {
       public factoryMethod(): Product {
           return new ConcreteProduct2();
       }
   }
   
   /**
    * The Product interface declares the operations that all concrete products must
    * implement.
    */
   interface Product {
       operation(): string;
   }
   
   /**
    * Concrete Products provide various implementations of the Product interface.
    */
   class ConcreteProduct1 implements Product {
       public operation(): string {
           return '{Result of the ConcreteProduct1}';
       }
   }
   
   class ConcreteProduct2 implements Product {
       public operation(): string {
           return '{Result of the ConcreteProduct2}';
       }
   }
   
   /**
    * The client code works with an instance of a concrete creator, albeit through
    * its base interface. As long as the client keeps working with the creator via
    * the base interface, you can pass it any creator's subclass.
    */
   function clientCode(creator: Creator) {
       // ...
       console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
       console.log(creator.someOperation());
       // ...
   }
   
   /**
    * The Application picks a creator's type depending on the configuration or
    * environment.
    */
   console.log('App: Launched with the ConcreteCreator1.');
   clientCode(new ConcreteCreator1());
   console.log('');
   
   console.log('App: Launched with the ConcreteCreator2.');
   clientCode(new ConcreteCreator2())`,
  ABSTRACT_METHOD: `/**
   * The Abstract Factory interface declares a set of methods that return
   * different abstract products. These products are called a family and are
   * related by a high-level theme or concept. Products of one family are usually
   * able to collaborate among themselves. A family of products may have several
   * variants, but the products of one variant are incompatible with products of
   * another.
   */
  interface AbstractFactory {
      createProductA(): AbstractProductA;
  
      createProductB(): AbstractProductB;
  }
  
  /**
   * Concrete Factories produce a family of products that belong to a single
   * variant. The factory guarantees that resulting products are compatible. Note
   * that signatures of the Concrete Factory's methods return an abstract product,
   * while inside the method a concrete product is instantiated.
   */
  class ConcreteFactory1 implements AbstractFactory {
      public createProductA(): AbstractProductA {
          return new ConcreteProductA1();
      }
  
      public createProductB(): AbstractProductB {
          return new ConcreteProductB1();
      }
  }
  
  /**
   * Each Concrete Factory has a corresponding product variant.
   */
  class ConcreteFactory2 implements AbstractFactory {
      public createProductA(): AbstractProductA {
          return new ConcreteProductA2();
      }
  
      public createProductB(): AbstractProductB {
          return new ConcreteProductB2();
      }
  }
  
  /**
   * Each distinct product of a product family should have a base interface. All
   * variants of the product must implement this interface.
   */
  interface AbstractProductA {
      usefulFunctionA(): string;
  }
  
  /**
   * These Concrete Products are created by corresponding Concrete Factories.
   */
  class ConcreteProductA1 implements AbstractProductA {
      public usefulFunctionA(): string {
          return 'The result of the product A1.';
      }
  }
  
  class ConcreteProductA2 implements AbstractProductA {
      public usefulFunctionA(): string {
          return 'The result of the product A2.';
      }
  }
  
  /**
   * Here's the the base interface of another product. All products can interact
   * with each other, but proper interaction is possible only between products of
   * the same concrete variant.
   */
  interface AbstractProductB {
      /**
       * Product B is able to do its own thing...
       */
      usefulFunctionB(): string;
  
      /**
       * ...but it also can collaborate with the ProductA.
       *
       * The Abstract Factory makes sure that all products it creates are of the
       * same variant and thus, compatible.
       */
      anotherUsefulFunctionB(collaborator: AbstractProductA): string;
  }
  
  /**
   * These Concrete Products are created by corresponding Concrete Factories.
   */
  class ConcreteProductB1 implements AbstractProductB {
  
      public usefulFunctionB(): string {
          return 'The result of the product B1.';
      }
  
      /**
       * The variant, Product B1, is only able to work correctly with the variant,
       * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
       * an argument.
       */
      public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
          const result = collaborator.usefulFunctionA();
          return \`The result of the B1 collaborating with the (\${result})\`;
      }
  }
  
  class ConcreteProductB2 implements AbstractProductB {
  
      public usefulFunctionB(): string {
          return 'The result of the product B2.';
      }
  
      /**
       * The variant, Product B2, is only able to work correctly with the variant,
       * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
       * an argument.
       */
      public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
          const result = collaborator.usefulFunctionA();
          return \`The result of the B2 collaborating with the (\${result})\`;
      }
  }
  
  /**
   * The client code works with factories and products only through abstract
   * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
   * product subclass to the client code without breaking it.
   */
  function clientCode(factory: AbstractFactory) {
      const productA = factory.createProductA();
      const productB = factory.createProductB();
  
      console.log(productB.usefulFunctionB());
      console.log(productB.anotherUsefulFunctionB(productA));
  }
  
  /**
   * The client code can work with any concrete factory class.
   */
  console.log('Client: Testing client code with the first factory type...');
  clientCode(new ConcreteFactory1());
  
  console.log('');
  
  console.log('Client: Testing the same client code with the second factory type...');
  clientCode(new ConcreteFactory2());`,
  BUILDER: `/**
  * The Builder interface specifies methods for creating the different parts of
  * the Product objects.
  */
 interface Builder {
     producePartA(): void;
     producePartB(): void;
     producePartC(): void;
 }
 
 /**
  * The Concrete Builder classes follow the Builder interface and provide
  * specific implementations of the building steps. Your program may have several
  * variations of Builders, implemented differently.
  */
 class ConcreteBuilder1 implements Builder {
     private product: Product1;
 
     /**
      * A fresh builder instance should contain a blank product object, which is
      * used in further assembly.
      */
     constructor() {
         this.reset();
     }
 
     public reset(): void {
         this.product = new Product1();
     }
 
     /**
      * All production steps work with the same product instance.
      */
     public producePartA(): void {
         this.product.parts.push('PartA1');
     }
 
     public producePartB(): void {
         this.product.parts.push('PartB1');
     }
 
     public producePartC(): void {
         this.product.parts.push('PartC1');
     }
 
     /**
      * Concrete Builders are supposed to provide their own methods for
      * retrieving results. That's because various types of builders may create
      * entirely different products that don't follow the same interface.
      * Therefore, such methods cannot be declared in the base Builder interface
      * (at least in a statically typed programming language).
      *
      * Usually, after returning the end result to the client, a builder instance
      * is expected to be ready to start producing another product. That's why
      * it's a usual practice to call the reset method at the end of the
      * \`getProduct\` method body. However, this behavior is not mandatory, and
      * you can make your builders wait for an explicit reset call from the
      * client code before disposing of the previous result.
      */
     public getProduct(): Product1 {
         const result = this.product;
         this.reset();
         return result;
     }
 }
 
 /**
  * It makes sense to use the Builder pattern only when your products are quite
  * complex and require extensive configuration.
  *
  * Unlike in other creational patterns, different concrete builders can produce
  * unrelated products. In other words, results of various builders may not
  * always follow the same interface.
  */
 class Product1 {
     public parts: string[] = [];
 
     public listParts(): void {
         console.log(\`Product parts: \${this.parts.join(', ')}\`);
     }
 }
 
 /**
  * The Director is only responsible for executing the building steps in a
  * particular sequence. It is helpful when producing products according to a
  * specific order or configuration. Strictly speaking, the Director class is
  * optional, since the client can control builders directly.
  */
 class Director {
     private builder: Builder;
 
     /**
      * The Director works with any builder instance that the client code passes
      * to it. This way, the client code may alter the final type of the newly
      * assembled product.
      */
     public setBuilder(builder: Builder): void {
         this.builder = builder;
     }
 
     /**
      * The Director can construct several product variations using the same
      * building steps.
      */
     public buildMinimalViableProduct(): void {
         this.builder.producePartA();
     }
 
     public buildFullFeaturedProduct(): void {
         this.builder.producePartA();
         this.builder.producePartB();
         this.builder.producePartC();
     }
 }
 
 /**
  * The client code creates a builder object, passes it to the director and then
  * initiates the construction process. The end result is retrieved from the
  * builder object.
  */
 function clientCode(director: Director) {
     const builder = new ConcreteBuilder1();
     director.setBuilder(builder);
 
     console.log('Standard basic product:');
     director.buildMinimalViableProduct();
     builder.getProduct().listParts();
 
     console.log('Standard full featured product:');
     director.buildFullFeaturedProduct();
     builder.getProduct().listParts();
 
     // Remember, the Builder pattern can be used without a Director class.
     console.log('Custom product:');
     builder.producePartA();
     builder.producePartC();
     builder.getProduct().listParts();
 }
 
 const director = new Director();
 clientCode(director);`,
};
