function calculateResult(){

    var studyGoal =
        Number(document.querySelector("#studyGoal").value);

    var lunchBudget =
        Number(document.querySelector("#lunchBudget").value);

    var mondayHours =
        Number(document.querySelector("#mondayHours").value);

    var tuesdayHours =
        Number(document.querySelector("#tuesdayHours").value);

    var wednesdayHours =
        Number(document.querySelector("#wednesdayHours").value);

    var thursdayHours =
        Number(document.querySelector("#thursdayHours").value);

    var fridayHours =
        Number(document.querySelector("#fridayHours").value);

    var saturdayHours =
        Number(document.querySelector("#saturdayHours").value);

    var sundayHours =
        Number(document.querySelector("#sundayHours").value);

    var mondayLunch =
        Number(document.querySelector("#mondayLunch").value);

    var tuesdayLunch =
        Number(document.querySelector("#tuesdayLunch").value);

    var wednesdayLunch =
        Number(document.querySelector("#wednesdayLunch").value);

    var thursdayLunch =
        Number(document.querySelector("#thursdayLunch").value);

    var fridayLunch =
        Number(document.querySelector("#fridayLunch").value);

    var saturdayLunch =
        Number(document.querySelector("#saturdayLunch").value);

    var sundayLunch =
        Number(document.querySelector("#sundayLunch").value);

    var totalStudyHours =
        mondayHours +
        tuesdayHours +
        wednesdayHours +
        thursdayHours +
        fridayHours +
        saturdayHours +
        sundayHours;

    var averageStudyHours =
        totalStudyHours / 7;

    var totalLunchExpense =
        mondayLunch +
        tuesdayLunch +
        wednesdayLunch +
        thursdayLunch +
        fridayLunch +
        saturdayLunch +
        sundayLunch;

    var averageLunchExpense =
        totalLunchExpense / 7;

    document.querySelector("#totalStudyHours").innerHTML =
        totalStudyHours;

    document.querySelector("#averageStudyHours").innerHTML =
        averageStudyHours.toFixed(2);

    document.querySelector("#totalLunchExpense").innerHTML =
        totalLunchExpense;

    document.querySelector("#averageLunchExpense").innerHTML =
        averageLunchExpense.toFixed(2);

    if(totalStudyHours >= studyGoal){

        document.querySelector("#studyMessage").innerHTML =
            "Great job! You reached your weekly study goal.";

    }else{

        document.querySelector("#studyMessage").innerHTML =
            "You did not reach your weekly study goal.";

    }

    if(totalLunchExpense <= lunchBudget){

        document.querySelector("#lunchMessage").innerHTML =
            "Good job! You stayed within your weekly lunch budget.";

    }else{

        document.querySelector("#lunchMessage").innerHTML =
            "You spent more than your weekly lunch budget.";

    }

}

function clearResult(){

    document.querySelector("#studyGoal").value = "";

    document.querySelector("#lunchBudget").value = "";

    document.querySelector("#mondayHours").value = "";

    document.querySelector("#tuesdayHours").value = "";

    document.querySelector("#wednesdayHours").value = "";

    document.querySelector("#thursdayHours").value = "";

    document.querySelector("#fridayHours").value = "";

    document.querySelector("#saturdayHours").value = "";

    document.querySelector("#sundayHours").value = "";

    document.querySelector("#mondayLunch").value = "";

    document.querySelector("#tuesdayLunch").value = "";

    document.querySelector("#wednesdayLunch").value = "";

    document.querySelector("#thursdayLunch").value = "";

    document.querySelector("#fridayLunch").value = "";

    document.querySelector("#saturdayLunch").value = "";

    document.querySelector("#sundayLunch").value = "";

    document.querySelector("#totalStudyHours").innerHTML = "0";

    document.querySelector("#averageStudyHours").innerHTML = "0";

    document.querySelector("#totalLunchExpense").innerHTML = "0";

    document.querySelector("#averageLunchExpense").innerHTML = "0";

    document.querySelector("#studyMessage").innerHTML = "";

    document.querySelector("#lunchMessage").innerHTML = "";

}