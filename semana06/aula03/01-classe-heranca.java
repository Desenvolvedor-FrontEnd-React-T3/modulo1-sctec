// Crie uma classe para eu usar herança também. Usando JAVA
public class Animal {
    protected String nome;
    protected int idade;

    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public void fazerSom() {
        System.out.println("O animal faz um som.");
    }
}

// Herança: A classe Cachorro herda da classe Animal
public class Cachorro extends Animal {
    public Cachorro(String nome, int idade) {
        super(nome, idade);
    }

    @Override
    public void fazerSom() {
        System.out.println("O cachorro late.");
    }

    public void mostrarNome() {
        System.out.println("O nome do cachorro é: " + getNome());
    }
}

// Instâncias
public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal("Animal Genérico", 5);
        animal.fazerSom();

        Cachorro cachorro = new Cachorro("Rex", 3);
        cachorro.fazerSom();
        cachorro.mostrarNome();
    }
}

