$(document).ready(function(){

    (function($) {
        "use strict";


    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                subject: {
                    required: true,
                },
                phone: {
                    digits: true,
                    minlength: 7

                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                subject: {
                    required: "제목을 간단히 적어주세요."
                },
                phone: {
                    digits: "숫자만 입력 가능합니다.",
                    minlength: "최소 7자리 이상 입력하셔야 합니다."
                },
                email: {
                    required: "회신 이메일 주소를 입력해주세요.",
                    email: "이메일 형식을 확인해주세요."
                },
                message: {
                    required: "문의 내용을 입력해주세요.",
                    minlength: "최소 10자 이상 입력하셔야 합니다."
                }
            },
            submitHandler: function(form) {
                $('#contactForm :input').attr('disabled', 'disabled');
                $('#contactForm :button').attr('disabled', 'disabled');
                var subject = $('#subject').val();
                var email = $('#email').val();
                var phone = $('#phone').val();
                var message = $('#message').val();

                $(form).ajaxSubmit({
                    type:"post",
                    dataType:"json",
                    data:{"subject":subject, "email":email, "phone":phone, "message":message},
                    url:"/testenc/contact_process.php",
                    success: function(data) {
                        $('#contactForm :input').removeAttr('disabled');
                        $('#contactForm :button').removeAttr('disabled');
                        setToast(1, '전송완료', '정상적으로 메세지를 전송하였습니다.');
                    },
                    error: function(request, status, error) {
                        $('#contactForm :input').removeAttr('disabled');
                        $('#contactForm :button').removeAttr('disabled');
                        setToast(4, '전송실패', '메세지 전송 중 문제가 발생하였습니다.');
                    }
                })
            }
        })
    })

 })(jQuery)
})

function setToast(type, title, message) {

  // toastr.success('www.leafcats.com', 'Toastr success!');
  // toastr.info('www.leafcats.com', 'Toastr info!');
  // toastr.warning('www.leafcats.com', 'Toastr warning!');
  // toastr.error('www.leafcats.com', 'Toastr error!');
  toastr.options = {
      closeButton: true,
      progressBar: true,
      showMethod: 'slideDown',
      preventDuplication: false,
      timeOut: 2000
  };

  if (type == 1) {
    toastr.success(title, message);
  }else if (type == 2) {
    toastr.info(title, message);
  }else if (type ==3) {
    toastr.warning(title, message);
  }else{
    toastr.error(title, message);
  }

}
