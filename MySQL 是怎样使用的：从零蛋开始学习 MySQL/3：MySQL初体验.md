# 第2章、MySQL初体验

标签： MySQL是怎样使用的新版

* * *

## 客户端/服务器架构

好的，现在`MySQL`已经装到了我们的计算机上，在进一步唠叨如何使用这个软件之前，我们先从宏观上了解一下这个软件是怎样运行的。以我们平时使用的微信为例，它其实是由两部分组成的，一部分是客户端程序，可以简称为客户端（英文名：client）；一部分是服务器程序，可以简称为服务器（英文名：server）。客户端可能有很多种形式，比如手机APP，电脑软件或者是网页版微信，每个客户端都有一个唯一的用户名，就是你的微信号，另一方面，腾讯公司在他们的机房里运行着一个服务器程序，我们平时操作微信其实都是用客户端来和这个服务器来打交道。比如狗哥用微信给猫爷发了一条消息的过程其实大致是这样的：

* 消息被客户端包装了一下，添加了发送者和接收者信息，然后从狗哥的微信客户端传送给微信服务器；

* 微信服务器从消息里获取到它的发送者和接收者，根据消息的接收者信息把这条消息送达到猫爷的微信客户端，猫爷的微信客户端里就显示出狗哥给他发了一条消息。

`MySQL`的使用过程跟这个是差不多的，它的服务器程序直接和我们存储的数据打交道，然后可以有好多客户端程序连接到这个服务器程序，发送增删改查的请求，然后服务器程序就响应这些请求，从而操作它维护的数据。和微信一样，MySQL的每个客户端都需要提供用户名密码才能登录，登录之后才能给服务器发请求来操作某些数据。我们日常使用MySQL的情景一般是这样的：

* 启动`MySQL`服务器程序。

* 启动`MySQL`客户端程序并连接到服务器程序。

* 在客户端程序中输入一些命令语句作为请求发送到服务器程序，服务器程序收到这些请求后，会根据请求的内容来操作具体的数据并向客户端返回操作结果。

## bin目录下的可执行文件

上一章中我们以`Windows`操作系统为例，把`MySQL`安装到了`C:\Program Files\MySQL\MySQL Server 5.7\`这个路径下，这个路径下有一个非常重要的`bin`目录，这个目录下存放着许多可执行文件（使用其他操作系统的同学可以按照自己的安装路径找到该路径下的`bin`目录）。我们列出一些在Windows系统中这个`bin`目录下的一部分可执行文件来看一下（文件太多，全列出来会刷屏的）：

    .
    ├── mysql.exe
    ├── mysqladmin.exe
    ├── mysqlbinlog.exe
    ├── mysqlcheck.exe
    ├── mysqld.exe
    ├── mysqldump.exe
    ├── mysqlimport.exe
    ├── mysqlpump.exe
    ... (省略其他文件)
    0 directories, 32 files


其他操作系统相应的`bin`目录下的可执行文件大体与Windows操作系统中的类似。这些可执行文件有的是服务器程序，有的是客户端程序。面对这么多可执行文件我们的第一反应的能不能用鼠标点点点的方式来执行它们？哈哈，如果执行该可执行文件时不需要为其传递额外的参数的话当然可以了，不过有些时候我们有向其传递额外参数的需求，就不能这么粗暴的用鼠标点点点了。另外，作为一个程序员或者准程序员，我们推荐使用命令行解释器来执行这些可执行文件。

> 小贴士： 命令行解释器通俗的说就是那些黑框框，这里的指的是类UNIX系统中的Shell或者Windows系统中的cmd.exe。关于如何打开Windows下的命令行解释器我们上一章已经唠叨过了，就不赘述了。

### 在命令行解释器中执行可执行文件

下边我们以在Windows系统中执行`mysql`这个可执行文件为例来看看如何在命令行解释器中执行这些可执行文件：

* 使用可执行文件的绝对／相对路径

  在我自己的Windows机器上`bin`目录的绝对路径就是：

      C:\Program Files\MySQL\MySQL Server 5.7\bin\


  如果我们想执行这个可执行文件，直接把`mysql`放到上边路径的后边就好：

      "C:\Program Files\MySQL\MySQL Server 5.7\bin\mysql"


  我们截个图：

  ![image_1dk9uf773qlt14eh1qpb1tkmvsk9.png-44.8kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf1754ea8~tplv-t2oaga2asx-image.image)

  从页面的输出可以看到执行过程中遇到了一些错误，当然我们现在并不关心这个错误是个啥，只是关心执行某个可执行文件的方式而已～

  > 小贴士： 可以看到在命令行解释器中我们给完整的命令加了双引号""，这是因为我们的命令中包含空格（Program Files目录名和MySQL Server 5.7目录名中均包含空格），如果不对完整的命令加双引号的话，命令行解释器会以为C:\\Program是我们想要执行的命令，而空格后边的内容是这个命令的参数。

  在我们一进入`cmd.exe`这个命令行解释器时，它展示的界面是这样的：

  ![image_1dka5dfn917v5btqol3atibc3k.png-45.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf1ebdaea~tplv-t2oaga2asx-image.image)

  `>`符号前边的一串路径：`C:\Users\Administrator`就是所谓的`当前工作目录`，如果我们想改变这个`当前工作目录`的话，可以使用`cd`命令，然后在命令后写上对应的目录路径，就像这样：

  ![image_1dka5l5if1ifpmm01dgh1ui416dr41.png-43.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf228fba4~tplv-t2oaga2asx-image.image)

  可以看到当前工作目录就已经切换到了：`C:\Program Files\MySQL\MySQL Server 5.7\bin\`。此时我们就可以输入当前工作目录下的可执行文件的文件名来直接执行对应的文件，就像这样：

  ![image_1dk9uuld56ok9potvguin1gmem.png-46.7kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf2f72dae~tplv-t2oaga2asx-image.image)

* 将该`bin`目录的路径加入到环境变量`Path`中

  如果我们觉得每次执行一个文件都要输入一串长长的路径名贼麻烦的话，可以把该`bin`目录所在的路径添加到环境变量`PATH`中。稍等一下，环境变量是个啥？我们可以把`环境变量`理解为操作系统维护的一些变量，在程序运行过程中可以访问到这些变量的值。如何查看这些`环境变量`呢？右键桌面上的`计算机`（或者叫`我的电脑`）图标：

  ![image_1dk9vp9hu1t6usk7oqv4m2dlj13.png-97.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf2ad5bc5~tplv-t2oaga2asx-image.image)

  点击`属性`按钮，弹出了如下界面：

  ![image_1dk9vvj7v13nc1vbf1bbg1ci6d1o1g.png-168.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdaf2cfa373~tplv-t2oaga2asx-image.image)

  然后继续点击左侧的`高级系统设置`按钮，弹出如下界面：

  ![image_1dka01s1578p17t3cga1bl4dla1t.png-40.9kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdba4291ab1~tplv-t2oaga2asx-image.image)

  然后在弹出的界面中点击`环境变量`按钮，弹出如下界面：

  ![image_1dka04ibel0tj9u10hm1j3k1dd92q.png-36.4kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdba54b7d6a~tplv-t2oaga2asx-image.image)

  我们在弹出的界面的下方看到了一个称之为`系统变量`的框，框里边儿有一个称之为`Path`的条目，我们双击一下这个条目就可以查看或者编辑一下这个名叫`Path`的系统变量的值：

  ![image_1dka09h3e4ij1kc21najitr1q9t37.png-18.3kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdba5ef8368~tplv-t2oaga2asx-image.image)

  我们把我的Windows机器上这个名叫`Path`的系统变量值复制下来给大家看看：

      C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;D:\Program Files\runtime\win64;D:\JDK\bin;%SystemRoot%


  可以看到这个环境变量`Path`的值其实是一系列路径的集合，各个路径之间使用分号`;`隔离开。每当我们在命令行解释器中输入一个命令，比如输入`mysql`时，系统便会在环境变量`Path`代表的各个路径下依次查找有没有一个名叫`mysql`的可执行文件，如果有，则执行该文件。如果各个路径下都没有一个名叫`mysql`的可执行文件，那么很遗憾，就会提示下边的信息（注意当前工作目录是`C:\Users\Administrator`）：

  ![image_1dka65m6h1tppd24k9rnh91gfn4e.png-44.7kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/11/16d1f7b4643eba0a~tplv-t2oaga2asx-image.image)

  > 小贴士： 当然，除了环境变量代表的一系列路径以外，系统还会在当前工作目录下寻找有没有相应的可执行文件。

  此时我们把`mysql`可执行文件所在的目录路径加入到`Path`环境变量中，也就是在`Path`环境变量的原有值后边再加上`C:\Program Files\MySQL\MySQL Server 5.7\bin\`，并且用分号`;`分开就好。所以在我的Windows机器上现在`Path`环境变量的值应该是这样：

      C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;D:\Program Files\runtime\win64;D:\JDK\bin;%SystemRoot%;C:\Program Files\MySQL\MySQL Server 5.7\bin\


  我们将该变量值修改之后点击确定按钮：

  ![image_1dka6fr0e177d15dn1k1r2no1fup4r.png-19kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/11/16d1f7bea049ca74~tplv-t2oaga2asx-image.image)

  之后在`环境变量`界面继续点击确定按钮：

  ![image_1dka6jjcr1hdk1cgp1mcf36v1fdc5l.png-37.3kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/11/16d1f7bea138369b~tplv-t2oaga2asx-image.image)

  这个`Path`环境变量的值就修改成功了，此时我们重新打开一个`cmd.exe`命令行解释器，重新输入`mysql`命令试一下：

  ![image_1dka6odr61tuo2e8a103h8co62.png-45.7kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/11/16d1f7bea6ea2608~tplv-t2oaga2asx-image.image)

  可以看到这回就不会提示`mysql`不是内部或外部命令，也不是可运行的程序或提出里文件的错误了。

### 服务器程序和客户端程序

#### 服务器程序

MySQL安装目录下的`bin`目录下的`mysqld`可执行文件代表着服务器程序，我们运行这个可执行文件就会启动`MySQL`服务器：

![image_1dka9pppvbks1foo1e9139es5jp.png-63.7kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdba74e2439~tplv-t2oaga2asx-image.image)

> 小贴士： 在使用mysqld可执行文件启动MySQL服务器时，请先停止原先运行在计算机上的MySQL服务器程序（可能我们之前通过net start MySQL57的方式启动了MySQL服务器，只要运行一遍net stop MySQL57名命令就可以将其停止了。

可以看到输出的日志中有一些`ERROR`字样的句子，这说明了在启动MySQL服务器过程中遇到了一些错误。其实这是由于MySQL服务器运行过程中严重依赖一个称之为`数据目录`的路径，不过我们安装MySQL时使用的`MySQL Installer`把这个`数据目录`的路径设置为了（当然不同版本的`MySQL Installer`可能将`数据目录`的路径设置为不同的值，我们只是用下边的值做一个例子来讲解一下如何在执行可执行文件时传递参数的例子）：

    C:\ProgramData\MySQL\MySQL Server 5.7\Data


在使用`mysqld`可执行文件启动MySQL服务器程序时，它默认并不会将上述路径设置为`数据目录`的路径，这时就需要我们在启动MySQL服务器时显式地指定一个称之为`datadir`的参数，该参数就代表着`数据目录`的路径，所以使用下边的命令启动MySQL服务器就不会报错了：

    mysqld --datadir="C:\ProgramData\MySQL\MySQL Server 5.7\Data"


我们截个图：

![image_1dkaa7ib11l2jj26qnb13j4193116.png-47.3kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/9/16d14cdba81eabcf~tplv-t2oaga2asx-image.image)

可以看到我们按下回车键后`cmd.exe`命令行解释器貌似卡住不动了，这就意味着MySQL服务器启动了。如果此时我们把这个`cmd.exe`命令行显示器关掉，或者按下`Ctrl + C`键，就会停止MySQL服务器程序的运行。我们还是推荐使用`Windows`服务的方式来启动或者停止MySQL服务器程序。

如果我们想查看在使用`mysqld`可执行文件启动MySQL服务器的过程中输出的日志信息，可以在上述命令后边加上`--console`，就像这样：

    mysqld --datadir="C:\ProgramData\MySQL\MySQL Server 5.7\Data" --console
    mysqld --datadir="C:\ProgramData\MySQL\MySQL Server 5.7\Data"


大家可以亲自试一试

#### 客户端程序

在服务器程序启动之后（不管是使用`mysqld`可执行文件启动的还是使用Windows服务的方式启动的），就可以接着启动客户端程序来连接到这个服务器喽。`bin`目录下有许多客户端程序，比方说`mysqladmin`、`mysqldump`、`mysqlcheck`等等等等（好多呢，就不一一列举了）。这里我们重点要关注的是可执行文件`mysql`，通过这个可执行文件可以让我们和服务器程序进程交互，也就是发送请求以及接收服务器的处理结果。启动这个可执行文件时一般需要一些参数，格式如下：

    mysql -h主机名  -u用户名 -p密码


各个参数的意义如下：

| 参数名 | 含义 |
| :-: | --- |
| `-h` | 表示启动服务器程序的计算机的域名或者IP地址，如果服务器程序就运行在本机的话，可以省略这个参数，也可以填`localhost`或者`127.0.0.1`。也可以写作 `--host=主机`的形式。 |
| `-u` | 表示用户名，我们刚刚安装完，作为超级管理员的我们的用户名是`root`。也可以写作 `--user=用户名`的形式。 |
| `-p` | 表示密码。也可以写作 `--password=密码`的形式。 |

比如我这样执行下边这个可执行文件\(用户名密码按你的实际情况填写\)，就可以启动`MySQL`客户端，并且连接到服务器了。

    mysql -hlocalhost -uroot -p123456


也可以这么写：

    mysql --host=localhost --user=root --password=123456


我们看一下连接成功后的界面：

    mysql: [Warning] Using a password on the command line interface can be insecure.

    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 2
    Server version: 5.7.27 MySQL Community Server (GPL)

    Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.

    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

    mysql>


最后一行的`mysql>`是一个客户端的提示符，之后客户端发送给服务器的命令都需要写在这个提示符后边。

如果我们想断开客户端与服务器的连接并且关闭客户端的话，可以在`mysql>`提示符后输入下边任意一个命令：

1.  `quit`
2.  `exit`
3.  `\q`

比如我们输入`quit`试试：

    mysql> quit
    Bye


输出了`Bye`说明客户端程序已经关掉了。注意注意注意，这是关闭客户端程序的方式，不是关闭服务器程序的方式，怎么关闭服务器上一节里唠叨过了。

如果你愿意，你可以多打开几个黑框框，每个黑框框都使用可以执行`mysql \-hlocalhost \-uroot \-p123456`命令，从而达到运行多个客户端程序的效果，每个客户端程序都是互不影响的。如果你有多个电脑，也可以试试把它们用局域网连起来，在一个电脑上启动`MySQL`服务器程序，在另一个电脑上执行`mysql`命令时使用`IP`地址作为主机名来连接到服务器。

### 连接注意事项

1.  最好不要在一行命令中输入密码。

    我们直接在黑框框里把密码敲出去被别人看到咋办，这和你当别人的面输入银行卡密码没啥区别，所以我们在执行`mysql`连接服务器的时候可以不显式的写出密码，就像这样：

        mysql -hlocalhost -uroot -p


    点击回车之后才会提示你输入密码：

        Enter password:


    不过这回你输入的密码不会被显示出来，心怀不轨的人也就看不到了，输入完成点击回车就成功连接到了服务器。

2.  如果你非要在显式的把密码输出来，那密码值和`-p`之间不能有空白字符，其他参数名之间可以有空白字符，就像这样：

        mysql -h localhost -u root -p123456


    如果加上了空白字符就是错误的，比如这样：

        mysql -h localhost -u root -p 123456


3.  `mysql`的各个参数的摆放顺序没有硬性规定，也就是说你也可以这么写：

        mysql -p  -u root -h localhost


4.  如果你的服务器和客户端安装在同一台机器上，`-h`参数可以省略，就像这样：

        mysql -u root -p


5.  如果你使用的是类Unix系统，并且省略`-u`参数后，会把你登陆操作系统的用户名当作`MySQL`的用户名去处理。

    比方说我用登录操作系统的用户名是`xiaohaizi`，那么在我的机器上下边这两条命令是等价的：

        mysql -u xiaohaizi -p


        mysql -p


    对于Windows系统来说，默认的用户名是`ODBC`，你可以通过设置环境变量`USER`来添加一个默认用户名。

## MySQL语句使用注意事项

`MySQL`的基本运行过程就是：通过客户端程序发送命令给服务器程序，服务器程序按照接收的命令去操作实际的数据。在我们使用黑框框启动了`MySQL`客户端程序之后，界面上会一直显示一行字儿：`mysql>`，这是一个提示符，你可以在它后边输入我们的命令然后按下回车键就把命令从客户端程序发送到了服务器程序，在书写命令的时候需要注意下边这几点：

1.  命令结束符号。

    在书写完一个命令之后需要以下边这几个符号之一结尾：

    * `;`
    * `\g`
    * `\G`

    比如说我们执行一个简单的查询当前时间的命令：

        mysql> SELECT NOW();
        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 17:50:55 |
        +---------------------+
        1 row in set (0.00 sec)

        mysql>


    其中的`SELECT`意味着这是一个查询命令，`NOW()`是`MySQL`内置的函数，用于返回当前时间（我们现在并不是深究具体的某个命令是什么意思，只是想介绍一下书写命令时需要注意的一些事情，所以大家不要纠结函数是个啥，我们后边会讲的）。结果中`1 row in set (0.00 sec)`的意思是结果只有1行数据，用时0.00秒。使用`\g`可以起到一样的效果：

        mysql> SELECT NOW()\g
        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 17:50:55 |
        +---------------------+
        1 row in set (0.00 sec)

        mysql>


    `\G`有一点特殊，它并不以表格的形式返回查询结果，而是以`垂直`的形式将每个列都展示在单独的一行中：

        mysql> SELECT NOW()\G
        *************************** 1. row ***************************
        NOW(): 2018-02-06 17:51:51
        1 row in set (0.00 sec)

        mysql>


    如果查询结果的列数非常多的话，使用`\G`可以让我们看清结果。

2.  命令可以随意换行。

    并不是按了回车键就提交命令了，只要按回车键的时候输入的语句里没有`;`、`\g`或者`\G`这些语句结束符号，该语句就算是没结束。比如上边查询当前时间的命令还可以这么写：

        mysql> SELECT
            -> NOW()
            -> ;
        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 17:57:15 |
        +---------------------+
        1 row in set (0.00 sec)

        mysql>


3.  可以一次提交多个命令

    我们可以在一条语句里写多个命令\(命令之间用上面说的结束符分隔\)，比如这样：

        mysql> SELECT NOW(); SELECT NOW(); SELECT NOW();
        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 18:00:05 |
        +---------------------+
        1 row in set (0.00 sec)

        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 18:00:05 |
        +---------------------+
        1 row in set (0.00 sec)

        +---------------------+
        | NOW()               |
        +---------------------+
        | 2018-02-06 18:00:05 |
        +---------------------+
        1 row in set (0.00 sec)

        mysql>


    连着输入了3个查询当前时间的命令，只要没按回车键，就不会提交命令。

    > 小贴士： 后边我们还会介绍把命令都写在文件里，然后再批量执行文件中的命令，那个感觉更爽！

4.  使用`\c`放弃本次操作。

    如果你想放弃本次编写的命令，可以在输入的命令后边加上`\c`，比如这样：

        mysql> SELECT NOW()\c
        mysql>


    如果不使用`\c`，那客户端会以为这是一个多行命令，还在一直傻傻的等你输入命令～

5.  大小写问题。

    `MySQL`默认对命令的大小写并没有限制，也就是说我们这样查询当前时间也是可以的：

        mysql> select now();
        +---------------------+
        | now()               |
        +---------------------+
        | 2018-02-06 18:23:01 |
        +---------------------+
        1 row in set (0.00 sec)

        mysql>


    不过按照习俗，这些命令、函数什么的都是要大写的，而一些名称类的东西，比如数据库名，表名、列名啥的都是要小写的，更多具体的书写规范等我们遇着再详细介绍。

6.  字符串的表示。

    在命令里有时会使用到字符串，我们可以使用单引号`''`或者双引号`""`把字符串内容引起来，比如这样：

        mysql> SELECT 'aaa';
        +-----+
        | aaa |
        +-----+
        | aaa |
        +-----+
        1 row in set (0.00 sec)

        mysql>


    这个语句只是简单的把字符串`'aaa'`又输出来了而已。但是一定要在字符串内容上加上引号，不然的话`MySQL`服务器会把它当作列名，比如这样就会返回一个错误：

        mysql> SELECT aaa;
        ERROR 1054 (42S22): Unknown column 'aaa' in 'field list'
        mysql>


    但是`MySQL`中有一种叫`ANSI_QUOTES`的模式，如果开启了这种模式，双引号就有其他特殊的用途了，至于是什么用途对于小白的你并不重要，你也不需要理解什么是个`ANSI_QUOTES`模式，重要的建议你最好使用单引号来表示字符串～

当一条命令从客户端发送给了MySQL服务器之后，服务器处理完后就会给客户端发送回来处理结果，然后显示到界面上。然后你就可以接着输入下一条命令了。
