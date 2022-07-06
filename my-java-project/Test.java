public class Test {

	public static void main(String[] args) {
		int[] value = {10};

		update(value);
		
		System.out.println(value[0]);
	} 

	public static void update(int[] value) {
		value[0] = 15;
	}

}
