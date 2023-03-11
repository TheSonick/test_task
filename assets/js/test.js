function addComment(e){
    let comment = (e.target.value)
    localStorage.setItem('comment', JSON.stringify(comment))
}
function addAnswer(e){
    let answer = (e.target.childNodes[1].childNodes[1].innerText)
    let answers = JSON.parse(localStorage.getItem('answers')) || []
    answers.push(answer)
    localStorage.setItem('answers', JSON.stringify(answers))
}

jQuery(document).ready(function () {
    localStorage.removeItem('answers')
    localStorage.removeItem('comment')
    $(".bq1").click( e => addAnswer(e) )
    $(".bq2").click( e => addAnswer(e) )
    $(".bq3").click( e => addAnswer(e) )
    $(".bq4").click( e => addAnswer(e) )
    $("#p_modal_button3").on("click", function (e) {
        e.preventDefault(), JSON.parse(localStorage.getItem('answers')).map(answer=>console.log(answer)), localStorage.removeItem('answers')
    })
    $("#comment-text").on("change", e => addComment(e))
    $("#comment-btn").click(function() {
        let comment = JSON.parse(localStorage.getItem('comment'))
        let $commentItem = $(`
            <div class="comments" id="comment17" style="display:block">
                <div class="profile">
                    <img src="assets/images/anonim.png">
                </div>
                <div class="comment-content">
                    <p class="name">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Anonimus</font>
                        </font>
                    </p>
                    <p>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">`+comment+`</font>
                        </font>
                    </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                    <span>
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Curte·comente</font>
                        </font>
                        <img src="assets/images/like.png" width="15px" height="15px">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">0</font>
                        </font>
                    </span>
                    <font style="vertical-align: inherit;">
                        <small>
                            <font style="vertical-align: inherit;">·</font>
                        </small>
                        <small>
                            <u>
                                <font style="vertical-align: inherit;">0 minutos antes</font>
                            </u>
                        </small>
                    </font>
                    <small>
                        <font style="vertical-align: inherit;"></font>
                        <u>
                            <font style="vertical-align: inherit;"></font>
                        </u>
                    </small>
                </div>
            </div>
        `)
        $(".comments")[0].after($commentItem[0])
        $("#comment-form")[0].reset()
        localStorage.removeItem('comment')
    })
})