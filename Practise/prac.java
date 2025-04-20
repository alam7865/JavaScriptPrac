import java.util.*;

public class prac {
    public static void main(String[] args) {
        String instructions[] = { "jump" };
        int values[] = { 0 };
        int n = values.length;
        int arr[] = new int[n];

        long score = 0;
        int i = 0;
        while (i < n && i >= 0) {
            if (instructions[i].equals("add")) {
                if (arr[i] == 1 || i < 0 || i >= n) {
                    break;
                }
                score += values[i];
                arr[i] = 1;
            } else {
                i += (values[i] - 1);
            }
        }

        System.out.println("Score: " + score);
    }
}