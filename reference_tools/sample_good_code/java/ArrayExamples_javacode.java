import javax.swing.*;

public class ArrayExamples
{
	public static void main(String[] args)
	{
		String[] words = new String[3]; //declare array identified as words
									//that contains 3 Strings

		//test methods here...
		//declare array integerArray below that holds 30 integers
		int[] integerArray = new int[30];
		fillIntArray(integerArray);//calls/invokes method, passes array as arg.
		outputArray(integerArray);//calls method, passes array as arg

		char[] arr = new char[26]; //declares array arr that holds 26 char's
		arr = fillCharArray(); //initiallizes arr array by calling method fillCharArray()
		outputArray(arr); //invoke overloaded method and pass array "arr" which has just been initialized

		System.out.println();
	} //end of main

	//Returns an array of upper-case chars
	//where arr[0] = A, arr[1]=B, etc
	public static char[] fillCharArray() //method that returns a char array
	{
		char[] array = new char[26]; //declare array "array" that holds 26 char's
		for (int i=0; i<array.length; i++)
			array[i] = (char)(i+65);//casting an integer into a char value

		return array; //returns the values held in array "array" (26 char's)
	} //end of fillArray method


	//create an array of size 'size', initialize all values to -1, return the array
	public static int[] makeAndFillArray(int size) //method passes an int which determines size of array and returns an array of int's
	{
		int[] arr = new int[size];  //declare array "arr" that holds as many integers as determined by variable "size"
		for (int i=0; i<arr.length; i++) //arr.length will equal integer value held by "size"
			arr[i] = -1; //why fill whole array with values of -1?....

		return arr; //returns the array "arr" filled with values
	}

	//create an array of 'size', initialize all values to -1, return the array
	public static double[] makeAndFillDoubleArray(int size)
	{
		double[] arr = new double[size];
		for (int i=0; i<arr.length; i++)
			arr[i] = -1.0;

		return arr;
	}

	//outputs the average of 'arr' to the screen
	public static double calcAverage(double[] arr)
	{
		double sum = 0;
		for (int i=0; i<arr.length; i++)
			sum += arr[i];

		double average = (sum*1.0/arr.length);
		return average;
	}

	//fills the array 'arr' with random numbers between 1 and 'higher'
	public static void fillArrayRandom(int[] arr, int higher)
	{
		for (int i=0; i<arr.length; i++)
		{
			arr[i] = (int) (Math.random()*higher) + 1;
		}

	}

	public static void outputArray(String[] arr)
	{
		for (int i =0; i<arr.length; i++)
			System.out.print(arr[i] + "\t");

		System.out.println();
	}

	public static void outputArray(double[] arr)
	{
		for (int i =0; i<arr.length; i++)
			System.out.print(arr[i] + "\t");

		System.out.println();
	}

	public static void outputArray(int[] arr)
	{
		for (int i=0; i<arr.length; i++)
		{
			System.out.print(arr[i] + "\t");
		}
		System.out.println();
	}

	//fill an array of ints with random numbers between 1 and 20
	public static void fillIntArray(int[] arr)
	{
		for (int i=0; i<arr.length; i++)
			arr[i] = (int)(Math.random() * 20) + 1;
	} //end of method fillIntArray

	//returns the average of the values of an array of ints
	public static double calcAverage(int[] array)
	{
		int sum=0;
		for (int i=0; i<array.length; i++)
			sum += array[i];

		return ( sum/(double)array.length );
	} //end calcAverage method


	//output all elements of an array of chars
	//with a space in between and a newline at the end
	public static void outputArray(char[] arr)
	{
		for (int i=0; i<arr.length; i++)
			System.out.print(arr[i] + " ");

		System.out.println();
	} //end of outputArray method
} //end of ArrayExamples class