import java.util.*;

public class countSay {
    public static void countAndSay(int n, String str) {
        if (n == 0) {
            System.out.println(str);
            return;
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < str.length(); i++) {
            int count = 1;
            for (int j = i + 1; j < str.length(); j++) {
                if (str.charAt(i) == str.charAt(j)) {
                    count++;
                    i++;
                } else {
                    break;
                }
            }
            sb.append(count);
            sb.append(str.charAt(i));
        }

        countAndSay(n - 1, sb.toString());
    }

    public static void main(String args[]) {
        int n = 4;
        countAndSay(n - 1, "1");
    }
}