//CSC 211 JAVA ASSIGNMENT #5  PROBLEM #2 BY ADAM WILSON

public class HundredDiceRolls
{
	public static void main(String[] args)
	{
		int[] hundredRolls = new int[100]; //CREATES ARRAY (UNFILLED)
		int numOnes=0, numTwos=0, numThrees=0, numFours=0;//TO COUNT OCCURRENCES
		int numFives=0, numSixes=0;//TO COUNT OCCURRENCES

		System.out.println("WE WILL SIMULATE 100 DICE ROLLS & LIST OUTCOMES HERE: \n");

		//THIS FOR LOOP WILL ITERATE THRU INDEX 0-99 AND FILL W/ # 1-6 RANDOMLY
		for (int i=0; i<hundredRolls.length; i++)
			hundredRolls[i] = (  (int)( 6.0*Math.random() ) + 1  );


		//THIS FOR LOOP OUTPUTS EACH VALUE IN ARRAY SEP'D BY A SPACE
		for (int i=0; i<hundredRolls.length; i++)
			System.out.print(hundredRolls[i] + " " );

		System.out.println("\n");

		//THIS FOR LOOP COUNTS HOW MANY OF EACH ROLL OCCURRED
		for (int i=0; i<hundredRolls.length; i++)
		{
			if 		(hundredRolls[i]==1)
				numOnes++;
			else if (hundredRolls[i]==2)
				numTwos++;
			else if (hundredRolls[i]==3)
				numThrees++;
			else if (hundredRolls[i]==4)
				numFours++;
			else if (hundredRolls[i]==5)
				numFives++;
			else if (hundredRolls[i]==6)
				numSixes++;

		} //END FOR LOOP

		//WE NOW OUTPUT HOW MANY TIMES EACH ROLL OCCCURRED
		System.out.println("The number 1 was rolled " + numOnes + " times.");
		System.out.println("The number 2 was rolled " + numTwos + " times.");
		System.out.println("The number 3 was rolled " + numThrees + " times.");
		System.out.println("The number 4 was rolled " + numFours + " times.");
		System.out.println("The number 5 was rolled " + numFives + " times.");
		System.out.println("The number 6 was rolled " + numSixes + " times.");
		System.out.println();


		//BAR GRAPH USING STARS (*) TO REPRESENT EACH OCCURRENCE
		//WE USE A FOR LOOP THAT EXECUTES ON THE CONDITION THAT THE COUNTER
		//IS LESS THAN THE COUNTER FOR PARTICULAR OUTCOME OCCURRENCES IE "numOnes"
		System.out.println("GRAPHICAL REPRESENTATION OF OCCURRENCES FOR "+
			"EACH OUTCOME:");

		System.out.println();
		System.out.print("1: ");
		for (int i=0; i<numOnes; i++)  {
			System.out.print("*");     }

		System.out.println();
		System.out.print("2: ");
		for (int i=0; i<numTwos; i++)  {
			System.out.print("*");     }

		System.out.println();
		System.out.print("3: ");
		for (int i=0; i<numThrees; i++)  {
			System.out.print("*");     }

		System.out.println();
		System.out.print("4: ");
		for (int i=0; i<numFours; i++)  {
			System.out.print("*");     }

		System.out.println();
		System.out.print("5: ");
		for (int i=0; i<numFives; i++)  {
			System.out.print("*");     }

		System.out.println();
		System.out.print("6: ");
		for (int i=0; i<numSixes; i++)  {
			System.out.print("*");     }

		System.out.println("\n");

	} //END METHOD MAIN

} //END CLASS HundredDiceRolls