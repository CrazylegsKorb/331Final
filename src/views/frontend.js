$(function(){

    var $list = $('#list');

    var $id = $('#id');
    var $fName = $('#fname');
    var $lName = $('#lname');
    var $phone = $('#phone');
    var $company = $('#company');
    var $email = $('#email');

    $.ajax({
        type: 'GET',
        url: '/contact',
        success: function(data){
            console.log('success',data);
            $.each(data, function(i,ele){
                $list.append('<li>Id: '+ele._id+'<br>First Name: '+ele.firstName+'<br>Last Name: '+ele.lastName+'<br>Email: '+ele.email+'<br>Phone: '+ele.phone+'<br>Company: '+ele.company+'</li>');
            });
        },
        error: function(){
            alert("error");
        }
    });

    $('#add').on('click',function(){
        var contact = {
            firstName: $fName.val(),
            lastName: $lName.val(),
            phone: $phone.val(),
            company: $company.val(),
            email: $email.val()
        };

        $.ajax({
            type: 'POST',
            url: '/contact',
            data: contact,
            success: function(){
                $.ajax({
                    type: 'GET',
                    url: '/contact',
                    success: function(data){
                        console.log('success',data);
                        $list.empty();
                        $.each(data, function(i,ele){
                            $list.append('<li>Id: '+ele._id+'<br>First Name: '+ele.firstName+'<br>Last Name: '+ele.lastName+'<br>Email: '+ele.email+'<br>Phone: '+ele.phone+'<br>Company: '+ele.company+'</li>');
                        });
                    },
                    error: function(){
                        alert("error");
                    }
                });
            },
            error: function(){
                alert("error");
            }
        });
    });

    $('#del').on('click',function(){
        var link = '/contact/'+$id.val();
        $.ajax({
            type: 'DELETE',
            url: link,
            success: function(){
                $.ajax({
                    type: 'GET',
                    url: '/contact',
                    success: function(data){
                        console.log('success',data);
                        $list.empty();
                        $.each(data, function(i,ele){
                            $list.append('<li>Id: '+ele._id+'<br>First Name: '+ele.firstName+'<br>Last Name: '+ele.lastName+'<br>Email: '+ele.email+'<br>Phone: '+ele.phone+'<br>Company: '+ele.company+'</li>');
                        });
                    },
                    error: function(){
                        alert("error");
                    }
                });
            },
            error: function(){
                alert('error');
            }
        });
    });

    $('#put').on('click',function(){
        var link = '/contact/'+$id.val();
        var contact = {
            firstName: $fName.val(),
            lastName: $lName.val(),
            phone: $phone.val(),
            company: $company.val(),
            email: $email.val()
        };
            
        $.ajax({
            type: 'PUT',
            url: link,
            data: contact,
            success: function(){
                $.ajax({
                    type: 'GET',
                    url: '/contact',
                    success: function(data){
                        console.log('success',data);
                        $list.empty();
                        $.each(data, function(i,ele){
                            $list.append('<li>Id: '+ele._id+'<br>First Name: '+ele.firstName+'<br>Last Name: '+ele.lastName+'<br>Email: '+ele.email+'<br>Phone: '+ele.phone+'<br>Company: '+ele.company+'</li>');
                        });
                    },
                    error: function(){
                        alert("error");
                    }
                });
            },
            error: function(){
                alert("error");
            }
        });
    });
});
