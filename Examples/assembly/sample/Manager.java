package sample;

public class Manager {
    private final String name;
    private final int age;

    public Manager(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
