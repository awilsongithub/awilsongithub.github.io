//ADAM WILSON ASSIGNMENT#6  CSC 211 JAVA 1 WITH MENDELSOHN 3/5/11

import javax.swing.JOptionPane;

public class SumScores
{
	//THE METHOD GREETS USER AND ASKS THEM TO INPUT NAMES OF THREE ATHLETES
	//MAIN METHOD DECLARES 3 ARRAYS OF DOUBLES THEN CALLS OTHER
	//METHODS TO FILL THOSE ARRAYS RANDOMLY AND "FIND FINAL SCORE" FOR
	//EACH ARRAY. THE ARRAYS REPRESENT SCORES OF ATHLETES.
	//THEN THE WINNER IS ANNOUNCED PLUS THE FINAL SCORES OR EACH ATHLETE.
	public static void main(String[] args)
	{
		double[] athlete1 = new double[8];//DECLARING ARRAYS FOR EACH
		double[] athlete2 = new double[8];
		double[] athlete3 = new double[8];

		athlete1 = fillArray(athlete1);//METHOD CALL TO FILL ARRAYS
		athlete2 = fillArray(athlete2);
		athlete3 = fillArray(athlete3);

		//DECLARATION AND METHOD CALL TO GET FINAL SCORES
		double athlete1Score = findFinalScore(athlete1);
		double athlete2Score = findFinalScore(athlete2);
		double athlete3Score = findFinalScore(athlete3);

		System.out.println("Hello! You will enter the names of 3 athletes.");
		System.out.println("The program will display the scores they received."); System.out.println("Athletes are scored by 8 judges on a scale from 1-10.");
		System.out.println("The lowest & highest scores will be dropped.");
		System.out.println("The remaining 6 scores will be added to find a Final Score.");
		System.out.println("The gold medal winner will be announced at the end!\n");

		String athlete1Name, athlete2Name, athlete3Name;

		//THE LINES BELOW ASSIGN A NAME CORRESPONDING TO EACH ATHLETE
		//THEN A METHOD IS CALLED TO OUTPUT A PERSONALIZED MESSAGE FOR EACH ATHLETE
		//LISTING THEIR NAME, SCORES, AND FINAL SCORE
		athlete1Name = JOptionPane.showInputDialog("Please enter the name "+
			"of\nthe first athlete and press Enter.");
		JOptionPane.showInputDialog("Click OK to automatically submit scores for "+
			athlete1Name + "\nand to see the corresponding Final Score.");
		outputScores(athlete1Name, athlete1, athlete1Score);

		athlete2Name = JOptionPane.showInputDialog("Please enter the name "+
			"of\nthe second athlete and press Enter.");
		JOptionPane.showInputDialog("Click OK to automatically submit scores for "+
			athlete2Name + "\nand to see the corresponding Final Score.");
		outputScores(athlete2Name, athlete2, athlete2Score);

		athlete3Name = JOptionPane.showInputDialog("Please enter the name "+
			"of\nthe third athlete and press Enter.");
		JOptionPane.showInputDialog("Click OK to automatically submit scores for "+
			athlete3Name + "\nand to see the corresponding Final Score.");
		outputScores(athlete3Name, athlete3, athlete3Score);

		//THESE LINES DETERMINE WHO HAS THE HIGHEST SCORE
		//AND ANNOUNCE THEM AS THE GOLD MEDAL WINNER!!!!!
		String goldMedalWinner = athlete1Name;
		if (athlete1Score < athlete2Score)
			goldMedalWinner = athlete2Name;
		if (athlete2Score < athlete3Score && athlete1Score < athlete3Score)
			goldMedalWinner = athlete3Name;
		System.out.println(goldMedalWinner+ " HAS THE HIGHEST OVERALL FINAL SCORE "+
			"AND WINS THE GOLD MEDAL!!!!!\n\n");

		System.exit(0); //NEEDED W/GRAPHICALS ie JOptionPane
	}//END OF MAIN METHOD

	//THIS METHOD ACCEPTS AN ARRAY OF DOUBLES AND FILLS IT
	//WITH RANDOM DOUBLES BETWEEN GREATER THAN 1 BUT LESS THAN 10
	public static double[] fillArray(double[] array)
	{
		for (int i=0; i<array.length; i++)
		{
			array[i]= (Math.random()*9) + 1;
		}
		return array;
	}//END OF METHOD FILLARRAY

	//THIS METHOD ACCEPTS AN ARRAY OF DOUBLES AND
	//DISCARDS THE HIGHEST AND LOWEST OF THE SCORES
	//IN THE ARRAY THEN RETURNS THE SUM OF THE REMAINING SCORES
	public static double findFinalScore(double[] array)
	{
		double highest = -1000;
		double lowest = 1000;
		double sum = 0;

		for (int i=0; i<array.length; i++)
		{
			if (array[i] > highest)
				highest = array[i];
			if (array[i] < lowest)
				lowest = array[i];
			sum += array[i];
		}//END FOR LOOP

		return (sum - highest - lowest);
	}//END OF METHOD FINDFINALSCORE

	//ACCEPTS A STRING, AN ARRAY OF DOUBLES (SCORES) & A DOUBLE (FINAL SCORE)
	//OUTPUTS THEIR NAME, THEIR 8 SCORES PLUS THEIR FINAL SCORE
	public static String outputScores(String name, double[] array, double finalScore)
	{
		System.out.println("The individual scores for "+name+ " are:");

		for (int i=0; i<array.length; i++)
			System.out.print(array[i] + ", ");

		System.out.println("\n");
		System.out.println("After dropping both the highest and the lowest "+
			"scores,\nthe Final Overall Score for "+name+" is: "
			+finalScore+ "\n");
		return name;
	}//END METHOD GETNAMESOUTPUTSCORES

}//END OF CLASS SUMSCORES