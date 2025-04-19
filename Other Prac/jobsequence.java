import java.util.*;

public class jobsequence {
    public static void main(String[] args) {
        int arr[][] = {
                { 1, 2, 100 },
                { 2, 1, 19 },
                { 3, 2, 27 },
                { 4, 1, 25 },
                { 5, 1, 15 }
        };

        // Arrays.sort(arr, Comparator.comparingDouble(o -> o[2]));
        Arrays.sort(arr, Comparator.comparingInt((int[] o) -> o[2]).reversed());
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
