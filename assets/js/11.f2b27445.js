(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{491:function(e,s,n){"use strict";n.r(s);var t=n(4),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Nginx 可以作为一个独立的 Web 服务，也可以用来给 Apache 或是其他的 Web 服务做反向代理。")]),e._v(" "),n("p",[e._v("相比于 Apache，Nginx 可以处理更多的并发连接，而且每个连接的内存占用的非常小，主要负责负载一些访问量比较大的站点。。")]),e._v(" "),n("h2",{attrs:{id:"开始前的准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始前的准备"}},[e._v("#")]),e._v(" 开始前的准备")]),e._v(" "),n("p",[e._v("确保是以拥有 sudo 权限的用户来登录的服务器，并且服务器中没有 Apache 或是其他服务正在使用 80（HTTP） 和 443（HTTPS） 端口上，防止端口被占用，造成 Nginx 无法正常启动。")]),e._v(" "),n("h2",{attrs:{id:"centos7安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装"}},[e._v("#")]),e._v(" CentOS7安装")]),e._v(" "),n("h4",{attrs:{id:"安装epel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装epel"}},[e._v("#")]),e._v(" "),n("strong",[e._v("安装EPEL")])]),e._v(" "),n("p",[n("strong",[e._v("EPEL")]),e._v(", 即 Extra Packages for Enterprise Linux 的简称, 是为企业级 Linux 提供的一组高质量的额外软件包, 包括但不限于 Red Hat Enterprise Linux (RHEL), CentOS and Scientific Linux (SL), Oracle Enterprise Linux (OEL).")]),e._v(" "),n("p",[n("strong",[e._v("EPEL")]),e._v(" 是 yum 的一个软件源, 里面包含了许多基本源里没有的软件了, 但在我们在使用 epel 时是需要安装它才可以")]),e._v(" "),n("p",[e._v("EPEL 仓库中有 Nginx 的安装包。如果还没有安装过 EPEL，可以通过运行下面的命令来完成安装：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo yum install epel-release\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("验证 EPEL 仓库")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("ll /etc/yum.repos.d/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("多了"),n("strong",[e._v("epel.repo")]),e._v(" 和 "),n("strong",[e._v("epel-testing.repo")])]),e._v(" "),n("h4",{attrs:{id:"安装-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-nginx"}},[e._v("#")]),e._v(" 安装 Nginx")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo yum install nginx\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("如果这是第一次从 EPEL 仓库中安装软件，yum 可能会提示导入 EPEL GPG key：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\nImporting GPG key 0x352C64E5:\nUserid     : "Fedora EPEL (7) <epel@fedoraproject.org>"\nFingerprint: 91e9 7d7c 4a5e 96f1 7f3e 888f 6a2f aea2 352c 64e5\nPackage    : epel-release-7-9.noarch (@extras)\nFrom       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7\nIs this ok [y/N]:\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br")])]),n("p",[e._v("类似于上面的内容，遇到这种情况，输入 y，然后 Enter（回车） 即可继续安装。")]),e._v(" "),n("p",[e._v("如果的服务器开启了防火墙，则需要同时打开 80（HTTP）和 443（HTTPS）端口")]),e._v(" "),n("p",[e._v("通过下面的命令来打开这两个端口，可以直接登录服务器提供商控制台配置安全组规则：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo firewall-cmd --permanent --zone=public --add-service=http\nsudo firewall-cmd --permanent --zone=public --add-service=https\nsudo firewall-cmd --reload\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("p",[e._v("验证 Nginx 是否成功启动，可以在浏览器中打开 http://YOUR_EIP，将看到默认的 Nginx 默认欢迎页面：")]),e._v(" "),n("p",[e._v("Welcome to Nginx")]),e._v(" "),n("p",[e._v("注：Nginx 的默认欢迎页有好几种样式，和安装的版本有关，所以只用关注这个页面的大标题就行 Welcome to nginx！")]),e._v(" "),n("h4",{attrs:{id:"systemctl-管理nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#systemctl-管理nginx"}},[e._v("#")]),e._v(" systemctl 管理Nginx")]),e._v(" "),n("p",[e._v("可以像管理其他服务那样管理 Nginx。")]),e._v(" "),n("p",[e._v("启动 Nginx")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl start nginx")])]),e._v(" "),n("p",[e._v("停止 Nginx")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl stop nginx")])]),e._v(" "),n("p",[e._v("重启 Nginx")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl restart nginx")])]),e._v(" "),n("p",[e._v("修改 Nginx 配置后，重新加载")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl reload nginx")])]),e._v(" "),n("p",[e._v("设置开机启动 Nginx")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl enable nginx")])]),e._v(" "),n("p",[e._v("关闭开机启动 Nginx")]),e._v(" "),n("blockquote",[n("p",[e._v("sudo systemctl disable nginx")])]),e._v(" "),n("h2",{attrs:{id:"ubuntu16安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu16安装"}},[e._v("#")]),e._v(" Ubuntu16安装")]),e._v(" "),n("p",[n("strong",[e._v("基于APT源安装")])]),e._v(" "),n("h4",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo apt-get install nginx\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("然后通过这种方式安装的，会自动创建服务，会自动在/etc/init.d/nginx新建服务脚本，然后就可以使用")]),e._v(" "),n("h4",{attrs:{id:"命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[e._v("#")]),e._v(" 命令")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("sudo service nginx {start|stop|restart|reload|force-reload|status|configtest|rotate|upgrade}\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("h2",{attrs:{id:"nginx-的配置文件和最佳实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的配置文件和最佳实践"}},[e._v("#")]),e._v(" Nginx 的配置文件和最佳实践")]),e._v(" "),n("p",[e._v("通过以上方式安装的 Nginx, 安装好的文件位置")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("/usr/sbin/nginx：主程序")])]),e._v(" "),n("li",[n("p",[e._v("/etc/nginx：存放配置文件")])]),e._v(" "),n("li",[n("p",[e._v("/usr/share/nginx：存放静态文件")])]),e._v(" "),n("li",[n("p",[e._v("/var/log/nginx：存放日志")])])]),e._v(" "),n("p",[e._v("其实从上面的根目录文件夹可以知道，Linux系统的配置文件一般放在/etc，日志一般放在/var/log，运行的程序一般放在/usr/sbin或者/usr/bin。")]),e._v(" "),n("p",[e._v("如果忘记了nginx程序目录，可以执行：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("whereis nginx\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Nginx指定默认加载/etc/nginx/nginx.conf的配置文件。")]),e._v(" "),n("p",[e._v("如果要查看加载的是哪个配置文件，可以用这个命令"),n("code",[e._v("sudo nginx -t")]),e._v("或者"),n("code",[e._v("ps -ef | grep nginx")])]),e._v(" "),n("p",[e._v("为了使 Nginx 配置更易于维护，建议为每个服务（域名）创建一个单独的配置文件。")]),e._v(" "),n("p",[e._v("每一个独立的 Nginx 服务配置文件都必须以 .conf 结尾，并存储在 /etc/nginx/conf.d 目录中。可以根据需求，创建任意多个独立的配置文件。")]),e._v(" "),n("p",[e._v("独立的配置文件，建议遵循以下命名约定，比如域名是 kaifazhinan.com，那么的配置文件的应该是这样的 /etc/nginx/conf.d/kaifazhinan.com.conf，如果在一个服务器中部署多个服务，当然也可以在文件名中加上 Nginx 转发的端口号，比如 kaifazhinan.com.3000.conf，这样做看起来会更加友好。")]),e._v(" "),n("p",[e._v("如果的配置中有很多重复的代码，那么建议创建一个 /etc/nginx/snippets 文件夹，在这里面存放所有会被复用的代码块，然后在各个需要用到的 Nginx 的配置文件中引用进去，这样可以更方便管理和修改。")]),e._v(" "),n("p",[e._v("Nginx 日志文件（access.log 和 error.log ）位于 /var/log/nginx/ 目录中。建议为每个独立的服务配置不同的访问权限和错误日志文件，这样查找错误时，会更加方便快捷。")]),e._v(" "),n("p",[e._v("可以将要部署的代码文件，存储在任何想的位置，但是一般推荐存放在下列位置中的其中一个：")]),e._v(" "),n("blockquote",[n("p",[e._v("/home/user_name/site_name")])]),e._v(" "),n("blockquote",[n("p",[e._v("/var/www/site_name")])]),e._v(" "),n("blockquote",[n("p",[e._v("/var/www/html/site_name")])]),e._v(" "),n("blockquote",[n("p",[e._v("/opt/site_name")])]),e._v(" "),n("blockquote",[n("p",[e._v("/usr/share/nginx/html")])])])}),[],!1,null,null,null);s.default=a.exports}}]);