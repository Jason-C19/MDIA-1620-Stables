// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.


let horseName = "Jim";
let horseAge = 21;
let isHorseInside = true;
let monthlyHorseFee = 500;
let latePayFee = monthlyHorseFee * 0.2;

let welcomeMessage ="Hello welcome to my stable, this is my horse" + horseName;
let latePayMessage ="You're monthly pay for" + horseName + "is late!, you owe" + latePayFee;



//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

let horseOne = {
    name: "Jim",
    nickname: "Jimbo",
    favouriteTreat: "Burgers",
    age: 21,
    monthlyrent: 500,
    isInside: true,
    isTrained: false,
    color: "Purple"
};

let horseTwo = {
    name: "Lamar",
    nickname: "Lam",
    favouriteTreat: "jelly beans",
    age: 67,
    monthlyrent: 300,
    isInside: true,
    isTrained: true,
    color: "Green"
};

let horseThree = {
    name: "Cornelius",
    nickname: "Corn",
    favouriteTreat: "Hotdogs",
    age: 5,
    monthlyrent: 50,
    isInside: true,
    isTrained: false,
    color: "Yellow"
};

let horses = [horseOne,horseTwo,horseThree];


let newHorse = {
    name: "Bobby",
    nickname: "Bob",
    favouriteTreat: "Taco",
    age: 999,
    monthlyrent: 800,
    isInside: false,
    isTrained: true,
    color: "Red"
};

horses.push(newHorse);

horseOne.isHungry = true;
horseTwo.isHungry = true;
horseThree.isHungry = true;
newHorse.isHungry = false;

//lab 2:///////////////////////////////////////////////////////////////////

const totalStalls = 8;
let horsesInStable = 4

function availableStalls(horses) {
    console.log("Available stalls: " + (totalStalls - horses));
}

availableStalls(horsesInStable);


function latePaymentFee(horse) {
    let fee = horse.monthlyrent * 0.2;
    console.log(horse.name + "you owe a fee of $" + fee);
}

latePaymentFee(horseOne);


function getNickname(horse) {
    return horse.nickname;
}

let nickname = getNickname(horseOne);
console.log("This horses nickname is:"  + nickname);