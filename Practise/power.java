import java.util.*;

public class power {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 3, 2, 5 };
        int k = 3;
        int n = arr.length;
        ArrayList<Integer> list1 = new ArrayList<>();
        ArrayList<Integer> list2 = new ArrayList<>();
        ArrayList<Integer> list3 = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            list1.add(arr[i]);
            list2.add(arr[i]);
        }
        Collections.sort(list1);

        String ss1 = list1.toString();
        String ss2 = list2.toString();

        if (ss1.equals(ss2)) {
            list3.add(list1.get(list1.size() - 1));
        } else {
            list3.add(-1);
        }

        int idx = 0;
        for (int i = k; i < n; i++) {
            // remove first character
            list2.remove(0); // remove the first element from list2
            list1.remove(list1.indexOf(arr[idx]));
            idx++;
            // add char
            list1.add(arr[i]);
            list2.add(arr[i]);

            Collections.sort(list1);

            ss1 = list1.toString();
            ss2 = list2.toString();

            if (ss1.equals(ss2)) {
                list3.add(arr[i]);
            } else {
                list3.add(-1);
            }

        }

        System.out.println(list3.toString());

    }
}
