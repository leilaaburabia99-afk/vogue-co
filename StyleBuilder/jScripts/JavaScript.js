// הצגת תמונת הסקייטבורד שנבחר
function showBoard() {

    // הסתרת שתי התמונות לפני הצגת הבחירה הנוכחית
    document.getElementById("catBoardImage").style.visibility = "hidden";
    document.getElementById("hauntedBoardImage").style.visibility = "hidden";

    if (document.getElementById("catBoard").checked) {
        document.getElementById("catBoardImage").style.visibility = "visible";
    } else {
        if (document.getElementById("hauntedBoard").checked) {
            document.getElementById("hauntedBoardImage").style.visibility = "visible";
        }
    }
}


// הצגת תמונת הנעליים שנבחרו
function showShoes() {

    // הסתרת שתי התמונות לפני הצגת הבחירה הנוכחית
    document.getElementById("oldSkoolImage").style.visibility = "hidden";
    document.getElementById("nikeSBImage").style.visibility = "hidden";

    if (document.getElementById("oldSkool").checked) {
        document.getElementById("oldSkoolImage").style.visibility = "visible";
    } else {
        if (document.getElementById("nikeSB").checked) {
            document.getElementById("nikeSBImage").style.visibility = "visible";
        }
    }
}


// שינוי שקיפות התמונות של הבגדים והאביזרים
function changeItems() {

    const items = [
        "skateShirt", "skateTank", "skateHoodie",
        "skateShorts", "skateJeans",
        "skateCap", "skateChain", "skateBackpack"
    ];

    // אותו אינדקס בשני המערכים מחבר בין תיבת סימון לתמונה שלה
    const images = [
        "shirtImage", "tankImage", "hoodieImage",
        "shortsImage", "jeansImage",
        "capImage", "chainImage", "backpackImage"
    ];

    // מעבר על כל תיבות הסימון ושינוי שקיפות התמונה המתאימה
    for (let i = 0; i < items.length; i++) {

        if (document.getElementById(items[i]).checked) {
            document.getElementById(images[i]).style.opacity = "1";
        } else {
            document.getElementById(images[i]).style.opacity = "0.3";
        }
    }
}


// בדיקת שדה הטקסט ושתי קבוצות כפתורי הרדיו
function checkForm() {

    // קליטת התוכן שהמשתמש הקליד והמצב של כל כפתור רדיו
    const userName = document.getElementById("userName").value;
    const cat = document.getElementById("catBoard").checked;
    const haunted = document.getElementById("hauntedBoard").checked;
    const vans = document.getElementById("oldSkool").checked;
    const nike = document.getElementById("nikeSB").checked;

    // המשתנה נשאר false אם השדה ריק או מכיל רק רווחים
    let hasText = false;

    for (let i = 0; i < userName.length; i++) {

        // בדיקה של כל תו במחרוזת באמצעות האינדקס שלו
        if (userName[i] !== " ") {
            hasText = true;
        }
    }

    // נדרש טקסט ובחירה בכל קבוצת רדיו
    // אין חובה לסמן תיבות סימון
    if (hasText && (cat || haunted) && (vans || nike)) {
        document.getElementById("confirmButton").disabled = false;
    } else {
        document.getElementById("confirmButton").disabled = true;
    }
}


// הסתרת התוצאה אחרי שינוי הבחירה או הטקסט
function clearResult() {
    document.getElementById("result").style.display = "none";
}


// הצגת הבחירות של המשתמש
function confirmLook() {

    // בדיקה חוזרת לפני בניית התוצאה והסתרת אישור קודם
    checkForm();
    clearResult();

    // בניית הסיכום מתבצעת רק כאשר הפרטים הנדרשים מולאו
    if (document.getElementById("confirmButton").disabled === false) {

        const userName = document.getElementById("userName").value;

        let board = "";
        let shoes = "";

        if (document.getElementById("catBoard").checked) {
            board = "Cat Skateboard";
        } else {
            board = "Haunted Family";
        }

        if (document.getElementById("oldSkool").checked) {
            shoes = "Vans Old Skool";
        } else {
            shoes = "Nike SB Dunk Low";
        }

        const clothes = [
            "skateShirt", "skateTank", "skateHoodie",
            "skateShorts", "skateJeans"
        ];

        // אותו אינדקס מחבר בין מזהה תיבת הסימון לשם הפריט
        const clothesNames = [
            "חולצת Thrasher", "גופייה", "קפוצ'ון סקייט",
            "מכנסיים קצרים", "מכנסי Skate"
        ];

        // צבירת שמות הפריטים שנבחרו למחרוזת אחת
        let selectedClothes = "";

        for (let i = 0; i < clothes.length; i++) {

            if (document.getElementById(clothes[i]).checked) {

                // לפריט הראשון אין פסיק לפניו
                // לאחרים מוסיפים פסיק ורווח
                if (selectedClothes === "") {
                    selectedClothes = clothesNames[i];
                } else {
                    selectedClothes = selectedClothes + ", " + clothesNames[i];
                }
            }
        }

        // התייחסות למצב שבו לא נבחרו בגדים
        if (selectedClothes === "") {
            selectedClothes = "לא נבחרו בגדים";
        }

        const accessories = [
            "skateCap", "skateChain", "skateBackpack"
        ];

        // סדר השמות חייב להתאים לסדר המזהים במערך accessories
        const accessoriesNames = [
            "כובע Skate", "שרשרת", "תיק גב Nike"
        ];

        let selectedAccessories = "";

        for (let i = 0; i < accessories.length; i++) {

            if (document.getElementById(accessories[i]).checked) {

                // הוספת מפריד רק כאשר כבר קיים פריט במחרוזת
                if (selectedAccessories === "") {
                    selectedAccessories = accessoriesNames[i];
                } else {
                    selectedAccessories =
                        selectedAccessories + ", " + accessoriesNames[i];
                }
            }
        }

        // התייחסות למצב שבו לא נבחרו אביזרים
        if (selectedAccessories === "") {
            selectedAccessories = "לא נבחרו אביזרים";
        }

        // הצגת שם המשתמש כטקסט וסיכום כל הבחירות
        document.getElementById("resultName").textContent = userName;

        document.getElementById("resultBoard").textContent =
            "הסקייטבורד שבחרתם: " + board;

        document.getElementById("resultClothes").textContent =
            "בגדים: " + selectedClothes;

        document.getElementById("resultShoes").textContent =
            "נעליים: " + shoes;

        document.getElementById("resultAccessories").textContent =
            "אביזרים: " + selectedAccessories;

        // הצגת אזור הסיכום לאחר מילוי התוכן
        document.getElementById("result").style.display = "block";
    }
}