//CSC 211 JAVA ASSIGNMENT #5  PROBLEM #1 BY ADAM WILSON  2/22/11


import javax.swing.JOptionPane;  //IMPORTS PACKAGE WITH CLASS CONTAINING INPUT DIALOG METHOD

//CLASS******************************************************************************
public class ThreeStringArrayStats
{

	//MAIN METHOD WHICH INVOKES OTHER METHODS******************************************
	public static void main (String[] args)
	{
		String[] threeStrings = new String[3]; //DECLARING THE ARRAY OF 3 STRINGS

		for (int i=0; i<threeStrings.length; i++) //LOOP TO INPUT WITH DIALOGS
			threeStrings[i] = JOptionPane.showInputDialog("Enter a word & press Enter.");

		System.out.println("The 3 words entered are: " + threeStrings[0]
				+ ", "+ threeStrings[1] + " and " + threeStrings[2] );

		lengthOfLongestString(threeStrings); //INVOKING METHOD AND PASSING ARGUMENT
		lengthOfShortestString(threeStrings); //INVOKING METHOD AND PASSING ARGUMENT
		averageAndTotalLength(threeStrings); //INVOKING METHOD AND PASSIGN ARGUMENT


		System.exit(0);
	} //END METHOD MAIN****************************************************************


	//THIS METHOD RETURNS LENGTH OF LONGEST STRING**************************************
	public static void lengthOfLongestString(String[] stringArray)
	{
		String longestString = stringArray[0];

		for (int i=0; i<stringArray.length; i++)
		{
			if (stringArray[i].length() > longestString.length()  )
						longestString = stringArray[i];
		}

		System.out.println("The length of the longest word is: "+ longestString.length()  );

	}  //END METHOD lengthOfLongestString(String[] stringArray)**************************

	//THIS METHOD RETURNS LENGTH OF SHORTEST STRING**************************************
		public static void lengthOfShortestString(String[] stringArray)
		{
			String shortestString = stringArray[0];

			for (int i=0; i<stringArray.length; i++)
			{
				if (stringArray[i].length() < shortestString.length()  )
							shortestString = stringArray[i];
			}

			System.out.println("The length of the shortest word is: "+ shortestString.length()  );

	}  //END METHOD lengthOfShortestString(String[] stringArray)**************************

	//THIS METHOD WILL TAKE AN ARGUMENT THAT IS AN ARRAY OR STRINGS
	//AND OUTPUT THE AVERAGE LENGTH (W/ DECIMALS) OF IT'S STRINGS AND THE TOTAL
	//OF THE LENGTH OF ALL THE STRINGS ADDED UP
	public static void averageAndTotalLength(String[] stringArray)
	{
		int totalLength =0;
		double averageLength;
		for (int i=0; i<stringArray.length; i++)
			totalLength += stringArray[i].length();

		averageLength = 1.0*totalLength/(stringArray.length);
		System.out.println("The average length of the words in this array is: " +averageLength);
		System.out.println("The total number of characters in all words in the array is: "+
			totalLength);
	}//END METHOD averageAndTotalLength(String[] stringArray)


} //end class ThreeStringArrayStats*****************************************************