import java.util.*;

public class midsum {
    public static void main(String[] args) {
        int arr1[] = { 1, 2, 4, 6, 10 };
        int arr2[] = { 4, 5, 6, 9, 12 };

        int n = arr1.length + arr2.length;
        int mid = n / 2;

        int mid1 = -1;
        int mid2 = -1;

        int count1 = 0;
        int i = 0;
        int j = 0;

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] == arr2[j]) {

                count1++;
                if (count1 == mid - 1) {

                    mid1 = arr1[i];
                    // i++;
                }

                count1++;
                if (count1 == mid) {

                    mid2 = arr2[j];
                    // j++;
                    break;
                }
                i++;
                j++;
            }

            else if (arr1[i] > arr2[j]) {
                count1++;
                if (count1 == mid - 1) {
                    mid1 = arr2[j];
                    // j++;
                }

                if (count1 == mid) {
                    // count1++;
                    mid2 = arr2[j];
                    break;
                    // j++;
                }
                j++;
            } else {
                count1++;
                if (count1 == mid - 1) {
                    mid1 = arr1[i];
                    // j++;
                }

                if (count1 == mid) {
                    // count1++;
                    mid2 = arr1[i];
                    break;
                    // j++;
                }
                i++;
            }
        }

        while (i < arr1.length) {
            count1++;
            if (count1 == mid - 1) {
                mid1 = arr1[i];
            }
            if (count1 == mid) {
                mid2 = arr2[i];
                break;
            }
            i++;
        }

        while (j < arr2.length) {
            count1++;
            if (count1 == mid - 1) {
                mid1 = arr2[j];
            }
            if (count1 == mid) {
                mid2 = arr2[j];
                break;
            }
            j++;
        }

        System.out.println("Result:" + mid1 + " " + mid2);
    }
}
