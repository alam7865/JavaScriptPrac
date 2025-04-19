import java.util.*;

public class maxdiff {
    public static void main(String[] args) {
        int arr[] = { 2, 4, 8, 7, 7, 9, 3 };
        int n = arr.length;

        int arr1[] = new int[n];
        int arr2[] = new int[n];
        Stack<Integer> st1 = new Stack<>();
        // Stack<Integer>st1=new Stack<>();

        for (int i = 0; i < n; i++) {
            while (!st1.isEmpty() && st1.peek() >= arr[i]) {
                st1.pop();
            }

            // while (!st1.isEmpty() && arr[i] > st1.peek()) {
            // arr1[i] = st1.peek();
            // }
            if (!st1.isEmpty() && arr[i] > st1.peek()) {
                arr1[i] = st1.peek();
            }

            if (st1.isEmpty()) {
                arr1[i] = 0;
            }

            st1.push(arr[i]);
            // System.out.println(arr1[i]);
        }

        st1.clear();

        for (int i = n - 1; i >= 0; i--) {
            while (!st1.isEmpty() && st1.peek() >= arr[i]) {
                st1.pop();
            }

            if (!st1.isEmpty() && arr[i] > st1.peek()) {
                arr2[i] = st1.peek();
            }

            if (st1.isEmpty()) {
                arr2[i] = 0;
            }

            st1.push(arr[i]);
        }

        int max = 0;

        for (int i = 0; i < n; i++) {
            int diff = Math.abs(arr1[i] - arr2[i]);
            max = Math.max(max, diff);
        }

        System.out.println(max);
    }
}
