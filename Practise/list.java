import java.util.*;

public class list {
    public static void main(String args[]) {
        int n = 3;
        int arr[] = { 4, 3, 3 };

        ArrayList<Integer> list1 = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>();

        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < n; i++) {
            list1.add(set.size());
            set.add(arr[i]);
        }

        set.clear();

        for (int i = n - 1; i >= 0; i--) {
            list2.add(set.size());
            set.add(arr[i]);
        }
        Collections.reverse(list2);
        for (int i = 0; i < n; i++) {
            int num = list1.get(i) - list2.get(i);
            arr[i] = num;

        }

        // System.out.println(list2.toString());
        System.out.println(Arrays.toString(arr));
    }
}