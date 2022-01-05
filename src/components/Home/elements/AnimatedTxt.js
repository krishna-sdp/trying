import React, { Component } from "react";
import $ from "jquery";

let timeout;
let timeout2;
let timeout3;
let timeout4;
let timeout5;
let timeout6;
let timeout7;
let timeout8;


export default class AnimatedTxt extends Component {
  componentWillUnmount() {
    // console.log("asdf");

    clearTimeout(timeout);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    clearTimeout(timeout5);
    clearTimeout(timeout6);
    clearTimeout(timeout7);
    clearTimeout(timeout8);
  }
  componentDidMount() {
    // console.log();

    $("#hero-animation").ready(function () {
      var l = 1;

      function subHeadline(val) {
        if (val !== 5) {
          l = val + 1;
        } else {
          l = 0;
        }
      }

      //set animation timing
      var animationDelay = 2500,
        //loading bar effect
        barAnimationDelay = 3800,
        barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay = 50;

      initHeadline();

      function initHeadline() {
        //insert <i> element for each letter of a changing word
        singleLetters($(".cd-headline.letters").find("b"));
        //initialise headline animation
        animateHeadline($(".cd-headline"));
      }

      function singleLetters($words) {
        var i = 0;
        $words.each(function () {
          var word = $(this),
        //   letters = splitter.splitGraphemes(word.text()),
            letters = word.text().split(""),
            selected = word.hasClass("is-visible");

        //   console.log(word.text());
        //   console.log(letters);
          for (i in letters) {

            var a = letters.indexOf("<i> </i>");
            var b = letters.indexOf('<i class="in"> </i>');
            letters[a] = "&nbsp;";
            letters[b] = "&nbsp;";
            
            
            if (word.parents(".rotate-2").length > 0)
              letters[i] = "<i>" + letters[i] + "</i>";
            letters[i] = selected
              ? '<i class="in">' + letters[i] + "</i>"
              : "<i>" + letters[i] + "</i>";
          }
        //   console.log(letters)
        

          //for adding br
          var c = letters.indexOf("<i>^</i>");
          var d = letters.indexOf('<i class="in">^</i>');
          letters[c] = "<br />";
          letters[d] = "<br />";

          var newLetters = letters.join("");
        //   console.log("yo bro",newLetters)
          word.html(newLetters).css("opacity", 1);

        });
      }

      function animateHeadline($headlines) {
        var duration = animationDelay;
        $headlines.each(function () {
          var headline = $(this);
       
          let myword = headline[0] 
        //   console.log("yo do something for  this",myword )
        
        //   for (const property in myword) {
            // console.log(`${property}: ${myword[property]}`);
        //   }


          if (headline.hasClass("loading-bar")) {
            duration = barAnimationDelay;
            this.timeout2 = setTimeout(function () {
              headline.find(".cd-words-wrapper").addClass("is-loading");
            }, barWaiting);
          } else if (headline.hasClass("clip")) {
            var spanWrapper = headline.find(".cd-words-wrapper"),
              newWidth = spanWrapper.width() + 10;
            spanWrapper.css("width", newWidth);
          } else if (!headline.hasClass("type")) {
            //assign to .cd-words-wrapper the width of its longest word
            var words = headline.find(".cd-words-wrapper b"),
              width = 0;
            
            words.each(function () {
              var wordWidth = $(this).width();
              if (wordWidth > width) width = wordWidth;
            });
            headline.find(".cd-words-wrapper").css("width", width);
          }

          //trigger animation

          timeout = setTimeout(function () {
            // console.log("run",headline.innerHTML);
            // console.log("run",headline.innerText);
            hideWord(headline.find(".is-visible").eq(0));
            // console.log("asidfuoasd",headline.find(".is-visible").eq(0)[0] )
          }, duration);
        });
      }

      function hideWord($word) {
        var nextWord = takeNext($word);

        // console.log($word[0]);
        // console.log(typeof $word[0]);

        let myword = $word[0]
        // console.log("this is headline",myword )
        // for (const property in myword) {
        //   console.log(`${property}: ${myword[property]}`);
        // }

        var str = "Are\nSDP";
        if ($word[0]["outerText"] === str) {
          clearTimeout(timeout);
          clearTimeout(timeout2);
          clearTimeout(timeout3);
          clearTimeout(timeout4);
          clearTimeout(timeout5);
          clearTimeout(timeout6);
          clearTimeout(timeout7);
          clearTimeout(timeout8);
        } else {
          if ($word.parents(".cd-headline").hasClass("letters")) {
            // console.log("$$^$^$ animation starts")
            var bool =
              $word.children("i").length >= nextWord.children("i").length
                ? true
                : false;
            hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
            showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
          } else {
            switchWord($word, nextWord);
            timeout3 = setTimeout(function () {
              hideWord(nextWord);
            }, animationDelay);
          }

          if ($word) {
            subHeadline(l);
          }
        }
      }

      function hideLetter($letter, $word, $bool, $duration) {
        $letter.removeClass("in").addClass("out");

        if (!$letter.is(":last-child")) {
          timeout4 = setTimeout(function () {
            hideLetter($letter.next(), $word, $bool, $duration);
          }, $duration);
        } else if ($bool) {
          // console.log("kjbjk")
          timeout5 = setTimeout(function () {
            hideWord(takeNext($word));
          }, animationDelay);
        }

        if (
          $letter.is(":last-child") &&
          $("html").hasClass("no-csstransitions")
        ) {
          // console.log("kjbjk");
          var nextWord = takeNext($word);
          // console.log(nextWord);
          switchWord($word, nextWord);
        }
      }

      function showLetter($letter, $word, $bool, $duration) {
        $letter.addClass("in").removeClass("out");

        if (!$letter.is(":last-child")) {
          timeout6 = setTimeout(function () {
            showLetter($letter.next(), $word, $bool, $duration);
          }, $duration);
        } else {
          if ($word.parents(".cd-headline").hasClass("type")) {
            timeout7 = setTimeout(function () {
              $word.parents(".cd-words-wrapper").addClass("waiting");
            }, 200);
          }
          if (!$bool) {
            timeout8 = setTimeout(function () {
              hideWord($word);
            }, animationDelay);
          }
        }
      }

      function takeNext($word) {
        // console.log(!$word.is(":last-child"));
        // if (!$word.is(":last-child")) {
        // 	subHeadline(l);
        // }
        return !$word.is(":last-child")
          ? $word.next()
          : $word.parent().children().eq(0);
      }

      function switchWord($oldWord, $newWord) {
        $oldWord.removeClass("is-visible").addClass("is-hidden");
        $newWord.removeClass("is-hidden").addClass("is-visible");
      }
    });
  }

  render() {
    return (

        <div className="headline-animation">
          <section
            id="hero-animation"
            className="LandingTypewrite__gridContentNestedWrapper--1"
          >
            <section className="cd-intro tc-m">
              <h1
                // style={{ margin: "0" }}
                className="regular-font  cd-headline animate_header letters scale tc-m"
              >
                <span className="cd-words-wrapper tc-m">
                  <b className=" is-visible welcome-txt  ">
                  We Design Amazing ^Experience For You
                  </b>
                  <b className="  welcome-txt  ">
                  We Design Amazing ^Experience For You
                  </b>
                </span>
              </h1>
            </section>
          </section>
        </div>

    );
  }
}
