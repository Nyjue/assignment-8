
let userAnswers = {};


document.addEventListener('DOMContentLoaded', function() {
   
    const questionBlocks = document.querySelectorAll('.question-block');
    
    
    questionBlocks.forEach(function(block) {
        
        const answerButtons = block.querySelectorAll('.answer-btn');
        
        
        answerButtons.forEach(function(button) {
            
            button.addEventListener('click', function() {
                
                const questionNum = this.getAttribute('data-question');
                const answerValue = this.getAttribute('data-answer');
                
                
                answerButtons.forEach(function(btn) {
                    btn.classList.remove('selected');
                });
                
          
                this.classList.add('selected');
                
               
                userAnswers[questionNum] = answerValue;
                
                
                console.log('Question ' + questionNum + ' answered: ' + answerValue);
            });
        });
    });
    
    document.getElementById('submit-btn').addEventListener('click', displayResult);
});


function displayResult() {
    
    const totalQuestions = document.querySelectorAll('.question-block').length;
    if (Object.keys(userAnswers).length < totalQuestions) {
        alert('Please answer all questions before submitting!');
        return;
    }
   
    const pointValues = {
        '1': {'A': 1, 'B': 2, 'C': 3, 'D': 4},
        '2': {'A': 1, 'B': 2, 'C': 3, 'D': 4},
        '3': {'A': 1, 'B': 2, 'C': 3, 'D': 4},
        '4': {'A': 1, 'B': 2, 'C': 3, 'D': 4},
        '5': {'A': 1, 'B': 2, 'C': 3, 'D': 4}
    };
    
    // Calculate total points
    let totalPoints = 0;
    for (let question in userAnswers) {
        const answer = userAnswers[question];
        totalPoints += pointValues[question][answer];
    }
    
    // Determine result based on total points
    let result;
    if (totalPoints >= 4 && totalPoints <= 8) {
        result = "Explorer: You're adventurous, spontaneous, and always seeking new experiences. You thrive on change and discovery, and you're not afraid to take risks.";
    } else if (totalPoints >= 9 && totalPoints <= 12) {
        result = "Artist: You're creative, expressive, and appreciate beauty in all forms. You think outside the box and bring unique perspectives to any situation.";
    } else if (totalPoints >= 13 && totalPoints <= 16) {
        result = "Leader: You're confident, organized, and natural at taking charge. People look to you for direction and you excel at coordinating group efforts.";
    } else if (totalPoints >= 17 && totalPoints <= 20) {
        result = "Thinker: You're analytical, logical, and enjoy deep thinking. You prefer to understand how things work and value knowledge above all else.";
    } else {
        result = "Your results are inconclusive. Please try the quiz again!";
    }
    
    
    document.getElementById('result-text').textContent = result;
    document.getElementById('result-container').style.display = 'block';

    document.getElementById('result-container').scrollIntoView({ behavior: 'smooth' });
    
    
    console.log('Total points: ' + totalPoints);
    console.log('Result: ' + result);
}