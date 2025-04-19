import java.util.*;

public class sorting {
    public static void main(String args[]) {
        int arr[] = { 7, 8, 3, 1, 2 };

        // BubbleSort

        // for (int i = 0; i < arr.length - 1; i++) {
        // for (int j = 0; j < arr.length - i - 1; j++) {
        // if (arr[j] > arr[j + 1]) {
        // int temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        // }
        // }
        // }

        // System.out.println(Arrays.toString(arr));

        // Selection Sort
        // for (int i = 0; i < arr.length - 1; i++) {
        // int smallest = i;
        // for (int j = i + 1; j < arr.length; j++) {
        // if (arr[smallest] > arr[j]) {
        // smallest = j;
        // }
        // }

        // int temp = arr[smallest];
        // arr[smallest] = arr[i];
        // arr[i] = temp;
        // }

        // System.out.println(Arrays.toString(arr));

        int pos1 = 0;
        int pos2 = 0;

        ArrayList<String> list = new ArrayList<>();
        list.add("RIGHT");
        list.add("DOWN");
        int n = 4;
        int count = 0;
        for (int i = 0; i < list.size(); i++) {
            String ss = list.get(i);

            if (ss.equals("RIGHT")) {
                // pos1=pos1;
                pos2 += 1;
                count++;
            } else if (ss.equals("DOWN")) {
                pos1 += 1;
                count++;
            } else if (ss.equals("UP")) {
                pos1 -= 1;
                count--;
            } else {
                pos2 -= 1;
                count--;
            }
        }

        System.out.println(pos1);
        System.out.println(pos2);
        System.out.println("count" + count);
    }
}