# Allgemeine Übungen

1. Schreibe eine Funktion, die einen Parameter entgegennimmt und diesen Parameter dreimal in die Konsole einträgt.

2. Schreibe eine Funktion, die einen Parameter entgegennimmt und diesen Parameter fünfmal wiederholt zurückgibt. Für die Eingabe "Katze" würde sie "KatzeKatzeKatzeKatze" zurückgeben.

3. Schreibe eine Funktion, die zwei Parameter entgegennimmt, wobei der erste eine Zahl und der zweite ein String sein sollte. Die Funktion gibt das zweite Argument so oft zurück, wie das erste Argument definiert ist. Für die Eingaben `3` und "Woah" soll sie `WoahWoahWoah` zurückgeben

4. Schreibe eine Funktion, die eine Reihe von Zahlen als Parameter annimmt. Sie soll die größte Zahl im Array zurückgeben. Für die Eingabe `[1,6,83,91,0,-4,1337,5]` soll sie `1337` zurückgeben

5. Diese Frage hat 2 Teile

    Teil a) Schreibe eine Funktion, die eine Zahl aufnimmt und `console.log("Even 10!")` ausgibt, wenn die Zahl gerade durch 10 teilbar ist. Beispiele:

    -  printIfDivisibleByTen(1) --> no output
    -  printIfDivisibleByTen(2) --> no output
    -  printIfDivisibleByTen(32) --> no output
    -  printIfDivisibleByTen(10) --> "Even 10!" into the console
    -  printIfDivisibleByTen(30) --> "Even 10!" into the console
    -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

    Teil b) Schreibe eine for-Schleife, die 125 Mal läuft und jedes Mal die Funktion aus Teil a mit der aktuellen Iterationsnummer aufruft.

6. Schreibe eine Pfeilfunktion, die 5 Zahlen als Parameter annimmt und die größte Zahl zurückgibt

7. Schreibe eine Pfeilfunktion, die einen Parameter annimmt und true zurückgibt, wenn dieser Parameter eine Zeichenkette ist.

8. Schreibe eine Pfeilfunktion, die zwei Parameter annimmt und true zurückgibt, wenn beide Strings sind.

9. Schreibe eine Pfeilfunktion, die eine Zeichenkette annimmt. Die Funktion sollte das erste Wort der übergebenen Zeichenkette zurückgeben. Beispiele:
    - getFirstWord("Internetting is hard") --> "Internetting"
    - getFirstWord("Hello World") --> "Hello"
    - getFirstWord("Hello") --> "Hello"

10. *HARD* Schreibe eine Pfeilfunktion, die eine Zeichenkette aufnimmt.
Die Funktion sollte eine neue Zeichenkette zurückgeben, bei der jedes Wort der Eingabezeichenkette um die Anzahl der Wörter der Eingabezeichenkette wiederholt wird. Beispiele:
    - wordRepeater("bunny") --> "bunny"
    - wordRepeater("Cat food") --> "Cat Cat food food"
    - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
    - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

11. Schreibe eine kurze (einzeilige) Pfeilfunktion, die eine Zeichenkette annimmt und das erste Zeichen dieser Zeichenkette zurückgibt. Beispiele:
    - firstLetter("cat") --> "c"
    - firstLetter("quylthulg") --> "q"

12. Schreibe eine Pfeilfunktion, die eine Zeichenkette annimmt und eine neue Zeichenkette zurückgibt. Die neue Zeichenkette muss aus dem ersten Buchstaben jedes Wortes in der Eingabe bestehen. Beispiele:
    - firstLetters("cat") --> "c"
    - firstLetters("What the fruit") --> "Wtf"
    - firstLetters("MongoDB Express Node React") --> "MERN"
    - firstLetters("What You See Is What You Get") --> "WYSIWYG"

13. Schreibe eine Pfeilfunktion, die eine Variable annimmt. Wenn diese Variable ein String ist, gibt sie die Länge des Strings zurück. Wenn die Variable ein Array ist, gibt sie die Länge des Arrays zurück. Wenn sie etwas anderes ist, gibt sie null zurück. Du musst vielleicht in Google suchen, um herauszufinden, wie du herausfinden kannst, ob der Parameter ein Array ist - aber es gibt auch andere Möglichkeiten, dieses Problem zu lösen!

14. Schreibe eine Pfeilfunktion, die eine Variable aufnimmt. Wenn die Variable kein String ist, gib null zurück. Wenn es sich um eine Zeichenkette handelt, gib ein Array zurück, in dem jedes Zeichen der Zeichenkette in einem einzelnen Array-Eintrag enthalten ist. Beispiele:
    - explode("Cat") --> ["C", "a", "t"]
    - explode(41) --> null
    - explode("") --> []
    - explode("R & D") --> ["R", " ", "&", " ", "D"]

15. Reverse Engineering Herausforderung 1. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - foo("") -> false
    - foo("a") -> false
    - foo("o") -> true
    - foo("Cat") -> false
    - foo("Tomato") -> true
    - foo("Potato") -> true
    - foo("Blanket") -> false
    - foo("1") -> false

16. Reverse Engineering Herausforderung 2. Schreibe eine Funktion, die dies tut (*BONUS*: schreibe sie als kurze (einzeilige) Pfeilfunktion):
    - bar("") --> "Cat"
    - bar("x") --> "Cat"
    - bar("Cat") --> "Catt"
    - bar("Foobar") --> "Catobar"
    - bar("Potato") --> "Cattato"
    - bar("Tomato") --> "Catmato"
    - bar("International Space Station") --> "Catternational Space Station"
