public class Twofer {
    public String twofer(String name) {
        String finalName;
        if (name == null) {
            finalName = "you";
        } else {
            finalName = name;
        }
        String firstHalf = "One for ";
        String secondHalf = ", one for me.";
        // System.out.println(firstHalf + name + secondHalf);
        return firstHalf + finalName + secondHalf;
        // return firstHalf + "you" + secondHalf;
        // return finalName;
    }
}