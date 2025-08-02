# 第1章、MySQL概述

标签： MySQL是怎样使用的新版

* * *

## 存储数据方式演变

从古至今人们都有存储数据的需求，比方说记录账目开支、货物清单、人口统计等等等等，存储的方式也一直在变化。

### 人工管理阶段

很久很久以前，人们把数据存在动物骨头上，后来存到竹片上，再后来存到纸上，直到近代发明了磁带留声机啥的，不过这些都是依赖人工进行整理、保存和查询的，特点就是效率低下、错误率高、查找不方便等等等等。

### 文件系统阶段

后来人们发明了计算机，为了管理各种数据，人们发明了一种叫文件系统的东东，可以方便的通过文件的存储路径和文件名来访问各个文件的内容，计算机程序也可以直接通过文件系统来操作各种文件，比人工管理爽多了。

### 数据库阶段

随着文件中存储的内容越来越多，在文件中修改和查找某些数据已经变得非常困难了，所以人们发明了一种专门的软件来管理存储的数据，这些数据依照一定格式保存，通过这个软件可以方便的对数据进行增删改查操作，从而极大的提升了数据管理效率，人们就把这个管理数据的软件叫做数据库管理系统（英文：`Database Management System`，简称：`DBMS`）。

## MySQL简介

### 关系型数据库管理系统

我们平时经常会用表格来存放信息，比如下边的两个表格就存放着学生的一些基本信息和他们的各种科目的考试成绩：

**学生基本信息表**

| 学号 | 姓名 | 性别 | 身份证号 | 学院 | 专业 | 入学时间 |
| :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| 20180101 | 杜子腾 | 男 | 158177199901044792 | 计算机学院 | 计算机科学与工程 | 2018-09-01 |
| 20180102 | 杜琦燕 | 女 | 151008199801178529 | 计算机学院 | 计算机科学与工程 | 2018-09-01 |
| 20180103 | 范统 | 男 | 17156319980116959X | 计算机学院 | 软件工程 | 2018-09-01 |
| 20180104 | 史珍香 | 女 | 141992199701078600 | 计算机学院 | 软件工程 | 2018-09-01 |
| 20180105 | 范剑 | 男 | 181048200008156368 | 航天学院 | 飞行器设计 | 2018-09-01 |
| 20180106 | 朱逸群 | 男 | 197995199801078445 | 航天学院 | 电子信息 | 2018-09-01 |

**学生成绩表**

| 学号 | 科目 | 成绩 |
| :-: | :-: | :-: |
| 20180101 | 母猪的产后护理 | 78 |
| 20180101 | 论萨达姆的战争准备 | 88 |
| 20180102 | 母猪的产后护理 | 100 |
| 20180102 | 论萨达姆的战争准备 | 98 |
| 20180103 | 母猪的产后护理 | 59 |
| 20180103 | 论萨达姆的战争准备 | 61 |
| 20180104 | 母猪的产后护理 | 55 |
| 20180104 | 论萨达姆的战争准备 | 46 |

如果我们想查找史珍香的《母猪的产后护理》科目的考试成绩怎么办呢？我们可以先通过`学生基本信息表`查找到她的学号，然后再通过她的学号到`学生成绩表`里找到该学号对应的《母猪的产后护理》科目的成绩。

表格也简称为表，它是由行和列组成的。有一种类型的数据库管理系统就是通过表来存放数据的，而且不同的表可以通过某种关系联系起来\(例子中学生成绩表通过学号和学生基本信息表联系起来\)，我们把这种数据库管理系统称为`关系型数据库管理系统`，本书的主角儿`MySQL`就是一种关系型数据库管理系统。

### MySQL的优势

使用由行和列组成的表来存放数据的关系型数据库管理系统有好多种，比方说甲骨文的`Oracle`，`IBM`的`DB2`，微软的`SQL Server`，开源的`PostgreSQL`和`MySQL`等等等等。不过我们的主角儿是`MySQL`，我们瞅瞅它有什么特点：

* 免费

  就是不要钱，有很多数据库管理系统是要花真金白银买的，不过MySQL随便在网上下载就好喽～

* 开源

  MySQL的代码都是公开的，方便了广大程序员了解它的实现原理。又因为是开源的，大家都喜欢看代码给它挑bug，设计MySQL的大叔们就很快把这些已知的bug修复好，所以MySQL还是比较稳定的。

  > 小贴士： 我们可以从github上获取到MySQL的源代码，地址为：https://github.com/mysql/mysql-server

* 跨平台

  MySQL可以运行在各种主流的操作系统上，比如各种Unix系统、Windows系统啥的～

* 很牛

  它的性能还是比较好的，不然就没人用啦～

### 安装MySQL

说到底，`MySQL`其实就是个软件，我们想使用它的话首先得把它装到自己的计算机上，下边我们以`Windows`操作系统为例，来唠叨一下`MySQL`的安装过程。

1.  使用浏览器从下边的地址获得Windows上的`MySQL Installer`（可以理解为MySQL安装器或者MySQL安装程序）：

    <https://dev.mysql.com/downloads/installer/>

    ![image_1dk2lblegd6bf5p1f031sjb1ph016.png-102.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77540193d4a~tplv-t2oaga2asx-image.image)

    从图中可以看到，我们即将安装的`MySQL`版本为`8.0.17`，如果我们想找更早的一些版本的话，可以点击`Looking for previous GA versions`按钮：

    ![image_1dk2m0gikmupcnn12b6gi72if5a.png-87.1kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77546efcfe6~tplv-t2oaga2asx-image.image)

    我们看到对于`MySQL 5.7.27`这个版本的`MySQL Installer`来说，页面中提供了两个下载按钮，它们的意思分别是：

    * 第一个下载按钮对应的名称是：`mysql-installer-web-community-5.7.27.0.msi`，这个安装程序比较小，它仅仅包含安装程序和配置文件，并不包含`MySQL`的主体内容，相当于这只是一个壳，在安装过程中需要连接互联网来下载相应的内容。

    * `mysql-installer-community-5.7.27.0.msi`：这个安装程序比较大，MySQL的主体内容已经被绑定到该安装程序中，安装过程中不再需要实时下载。

    我们就选择下载这个已经绑定MySQL主体内容的`MySQL Installer`，点击`Download`按钮之后进入下边的页面：

    ![image_1dk2mmsn21k471leoskr8es6ju19.png-109kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77551cb8a3a~tplv-t2oaga2asx-image.image)

    页面提示我们注册或者登录，如果您不想注册或者登录的话，可以直接点击下边的`No thanks, just start my download`就可以直接将文件下载到自己的计算机上了。我将该文件保存到了`D`盘下边。

2.  下载完成后，双击运行`MySQL Installer`。

    ![image_1dk32a41t1r541ujo1ton9o6gb2t.png-40.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77555bdc301~tplv-t2oaga2asx-image.image)

    点击`运行`按钮，很抱歉弹出了一个错误框：

    ![image_1dk2ndvf0mrof6f1l0r1n618dm23.png-21kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775492bb918~tplv-t2oaga2asx-image.image)

    原来是我的这台Windows电脑上缺少了一个称之为`.NET Framework 4.5.2`的东东，我们可以到<https://www.microsoft.com/en-us/download/details.aspx?id=42643>将缺少的东西给安装上，然后进一步运行`MySQL Installer`。  

    > 小贴士： 如果你的Windows电脑上不弹出这个错误，那就没必要安装这个.NET Framework了。关于.NET Framework的安装过程我们就不详述了，非常简单～

    然后继续运行`MySQL Installer`，就进入到了这个界面：

    ![image_1dk3d7hfop3n1q48dgj1bh3sva9.png-92.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a7754ca18d13~tplv-t2oaga2asx-image.image)

    我们勾选上边的`I accept the license terms`，表示同意上边列出的条款（如果你有兴趣可以看看这些条款都写了什么～），然后点击`Next`按钮来选择安装类型：

    ![image_1dk4nguav1e275971srk180mlmsm.png-79.9kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a7757a45a2f4~tplv-t2oaga2asx-image.image)

    可以看到`MySQL Installer`支持多种安装类型，出于我们的学习目的，我们只需要选择`Server only`就好了。

    > 小贴士： 我们平常所说的MySQL其实包括服务器程序和客户端程序，客户端程序又可以分为好多种类型。对于此处选择的Server only安装类型来说，在安装MySQL服务器程序的同时，也会将一些跟该服务器程序绑定的客户端程序安装到机器上。我们下一章详细的介绍服务器程序和客户端程序的区分，本章中就把MySQL和MySQL服务器程序当成一个东西对待就好了。

    然后点击`Next`进入`Check Reqirements`阶段：

    ![image_1dk4otu1fmn3l8f7o1kotgm13.png-69.9kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a7758bb79dae~tplv-t2oaga2asx-image.image)

    我们安装的软件可能依赖另外一些软件，当`MySQL Installer`检测到有一些依赖的软件没有在当前主机安装时，就会进入`Check Requirements`阶段。从界面中我们可以看到`MySQL Server 5.7.27`依赖的一个软件没有被安装到本机上，不过`Status`列的值是空白的，这表明`MySQL Installer`会自动帮助我们下载并安装这个依赖的软件（如果`Status`列的值为`Manual`则需要我们手动的去安装这些依赖的软件）。我们可以点击`Execute`按钮来让`MySQL Installer`自动下载并安装依赖的软件。等待下载完成出现了如下界面：

    ![image_1dk4p3jtv1vh3kb81to81ci3bm01g.png-41.4kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a7758d2d70be~tplv-t2oaga2asx-image.image)

    我们勾选`I agree to the license terms and conditions`，点击`Install`，等待一会儿出现了下边的界面表示依赖的软件被安装完成：

    ![image_1dk4p6le24cl14be15gq1gpe16of1t.png-29.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a7758f30c1e5~tplv-t2oaga2asx-image.image)

    然后继续返回`Check Requirements`阶段的界面，现在`MySQL Server 5.7.27`的`Status`列的值就变为了`INSTL DONE`，我们就可以点击`Next`按钮继续安装了：

    ![image_1dk4pd9qa1jqnn1dq6f1f2dmip2a.png-70.2kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775925713c6~tplv-t2oaga2asx-image.image)

    之后进入`Installation`阶段，点击`Execute`按钮继续安装：

    ![image_1dk4pm27ejvhtumniv1rhn1hg52n.png-65kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775a2a4bdf1~tplv-t2oaga2asx-image.image)

    等一会儿就安装完成了：

    ![image_1dk4q0aqai59vg3kdk1f3g1t873k.png-63.8kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775b88bd2ef~tplv-t2oaga2asx-image.image)

    然后点击`Next`按钮，进入`Product Configuration`阶段，在这个阶段可以对我们安装的`MySQL Server 5.7.27`做一些基本的配置：

    ![image_1dk4qbn9o1tnc7s161msf7h924u.png-65.9kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775bee029e4~tplv-t2oaga2asx-image.image)

    继续点击`Next`按钮，进入详细的配置界面：

    ![image_1dk4qk7dpvie1aeq1eja12lj1515b.png-95.9kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775c5a3f2e5~tplv-t2oaga2asx-image.image)

    这个称之为`High Availability`的界面是用来对MySQL进行高可用配置的，当然作为小白的我们并不知道啥是个高可用，保持默认选项点击`Next`按钮就好了：

    ![image_1dk4ql2sl6f11ijq1afo4241gvr5o.png-81kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775c70826a1~tplv-t2oaga2asx-image.image)

    然后进入了`Type and Networking`界面，我们仍然保持默认选项，点击`Next`按钮进入下一步：

    ![image_1dk4r29op89e1li84ju188o1jb565.png-75.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775cf5d70ab~tplv-t2oaga2asx-image.image)

    在这个`Accounts And Roles`界面我们可以为`Root`用户设置密码，`Root`用户就是超级管理员，我设置的密码比较简单：`123456`，大家可以自定义自己的密码哈～ 当然在这个界面中也允许我们再多添加几个用户，不过我们不准备添加了，直接点击`Next`按钮进入下一步：

    ![image_1dk4rbeqacjr145c11hoqiakp76l.png-76.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775da34f7b6~tplv-t2oaga2asx-image.image)

    这个`Windows Service`界面是用来将我们安装的`MySQL`服务器程序设置为一个`Windows服务`用的，可以在这个界面中设置该Windows服务的名称（界面中显示的Windows服务名默认就是`MySQL57`，如果我们对服务名称不满意，可以自定义～），以及设置是否在开机时启动`MySQL`服务器程序。

    > 小贴士： Windows服务是一个长时间运行在后台的程序，我们把MySQL服务器程序设置为一个Windows服务之后，就可以使用管理Windows服务的方式来操作它，稍后我们演示～

    其他的部分我们就保持默认设置，继续点击`Next`按钮：

    ![image_1dk5617141tmk13ieuqqmj16dp7i.png-68.8kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775fc861670~tplv-t2oaga2asx-image.image)

    进入了`Apply Configuration`界面，界面显示了一堆即将要做的工作，比方说生成配置文件、初始化数据库、启动`MySQL`服务器等等，我们也不用关心，点击`Execute`按钮就好了，完成之后便会出现下边的界面：

    ![image_1dk56a29b1orl1rb1c4d1cod1t4l82.png-71.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a775ff1250b0~tplv-t2oaga2asx-image.image)

    我们点击`Finish`按钮返回到`Product Configuration`阶段：

    ![image_1dk577cju1oa6j973ls1kg11j788f.png-63.1kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77604efc09d~tplv-t2oaga2asx-image.image)

    从界面中可以看出来，现在已经完成了配置，继续点击`Next`按钮：

    ![image_1dk57bakd12neja9kcnrh4122n8s.png-53.4kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0a77607c49f3d~tplv-t2oaga2asx-image.image)

    到这里安装过程就结束了，点击`Finish`按钮退出安装程序。

    > 小贴士： 大家有没有观察到上述过程并没有让我们选择MySQL的安装路径呢？是的，MySQL Installer默认将MySQL安装到了C:\\Program Files\\MySQL\\MySQL Server 5.7\\这个路径下。如果我们想自定义安装路径的话，就得选择Custom安装类型，为了方便，我们就让它安装到C盘吧～ 当然，在Windows系统上使用MySQL Installer是设计MySQL的大叔推荐的一种比较简便的安装方式，当然我们还可以通过其他安装方式（比如直接下载zip包，或者直接编译源代码来安装）来将MySQL安装到Windows系统上，只不过稍微有点复杂，大家有兴趣的话可以到MySQL的文档中查看。

3.  以服务的方式启动和关闭`MySQL`服务器。

    * 使用可视化界面管理Windows服务

    我们上边在`Apply Configuration`阶段将`MySQL`服务器程序设置成了一个名为`MySQL57`的`Windows服务`，我们可以打开`Windows`的服务管理器来查看。首先点击`开始`菜单，搜索名叫`计算机管理`的程序：

    ![image_1dk59lls1v7s1jj61v5317pvco199.png-26.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac332d8693a5~tplv-t2oaga2asx-image.image)

    打开这个名叫`计算机管理`的程序，出现如下界面：

    ![image_1dk59pkir1sgfrj71n6p180ars9m.png-100.1kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac332e8a83d4~tplv-t2oaga2asx-image.image)

    再点击`服务和应用程序`下的`服务`选项，进入Windows的服务管理器：

    ![image_1dk5a1a29tao1irvimq1vd7m7at.png-190.4kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac3332af9c68~tplv-t2oaga2asx-image.image)

    可以看到里边就有一个名叫`MySQL57`的服务，它出于`已启动`状态（这是在安装的`Apply Configuration`阶段启动的）。如果我们想把它关掉，使用右键点击该条目，在弹出的菜单中点击`停止`就好了：

    ![image_1dk5bbut15lodpf15jh1o191treba.png-175.1kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac333663b69b~tplv-t2oaga2asx-image.image)

    * 使用命令行解释器来管理Windows服务

    不过作为程序员，老用可视化界面的效率太低了，我们还是偏向于使用命令行解释器来做相关操作。我们可以点击`开始`菜单，搜索名叫`cmd`的程序（或者点击`Windows键 + R键`后输入cmd）：

    ![image_1dk5bia3o1h75s2jaulcjd1174bn.png-26.5kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac33374bfe2e~tplv-t2oaga2asx-image.image)

    然后就进入了一个黑框框，这个黑框框就是所谓的`命令行解释器`：

    ![image_1dk5bkqqd1c961vkdpdvvk81ajdc4.png-37.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac3337fdf8e0~tplv-t2oaga2asx-image.image)

    我们可以在这个黑框框中输入`net start MySQL57`来启动`MySQL`服务器程序对应的Windows服务，或者使用`net stop MySQL57`来停止`MySQL`服务器程序对应的Windows服务，就像这样：

    ![image_1dk5br03s1iupjpgnllhce5s0ch.png-43.6kB](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/7/16d0ac3368e62969~tplv-t2oaga2asx-image.image)

好了，到现在为止，我们已经掌握了如何`MySQL`的安装、启动和停止方式，不过至今没有使用过它，下一章再见吧～
