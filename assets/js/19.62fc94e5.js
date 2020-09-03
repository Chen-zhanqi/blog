(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{499:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("开发中经常用到的项目结构示例")]),s._v(" "),a("h3",{attrs:{id:"创建shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建shell脚本"}},[s._v("#")]),s._v(" 创建shell脚本")]),s._v(" "),a("p",[s._v("使用 shell 脚本快速生成项目基础骨架")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pan.baidu.com/s/1gey_Ngn6VfzQMRAQVhSGnA",target:"_blank",rel:"noopener noreferrer"}},[s._v("脚本文件下载"),a("OutboundLink")],1),s._v("  提取码："),a("strong",[s._v("xjxe")])]),s._v(" "),a("p",[s._v("将下面的脚本保存为文件 generate_flask_boilerplate.sh")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# !/bin/bash\ndirname=$1\nif [ ! -d "$dirname" ]\nthen\n    mkdir ./$dirname && cd $dirname\n    mkdir ./application\n    mkdir -p ./application/{controllers,models,static,static/css,static/js,templates}\n    touch {manage.py,requirements.txt}\n    touch ./application/{__init__.py,app.py,configs.py,extensions.py}\n    touch ./application/{controllers/__init__.py,models/__init__.py}\n    touch ./application/{static/css/style.css,templates/404.html,templates/base.html}\n    echo "File created"\nelse\n    echo "File exists"\nfi\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"生成项目骨架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成项目骨架"}},[s._v("#")]),s._v(" 生成项目骨架")]),s._v(" "),a("p",[s._v("Linux "),a("code",[s._v("sh generate_flask_boilerplate.sh flask-demo")])]),s._v(" "),a("p",[s._v("Windows 新建项目目录flask-demo并进入 双击shell脚本文件")]),s._v(" "),a("h3",{attrs:{id:"结构示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构示例"}},[s._v("#")]),s._v(" 结构示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("flask-demo\n├── application\n│   ├── __init__.py\n│   ├── app.py\n│   ├── configs.py\n│   ├── controllers\n│   │   ├── __init__.py\n│   ├── extensions.py\n│   ├── models\n│   │   ├── __init__.py\n│   ├── static\n│   │   ├── css\n│   │   │   └── style.css\n│   │   └── js\n│   └── templates\n│       ├── 404.html\n│       ├── base.html\n├── manage.py\n├── requirements.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("骨架包含三个顶级文件(夹)：application 目录、manage.py 文件和 requirements.txt 文件，一般情况下，可能还需要一个 tests 目录。")]),s._v(" "),a("p",[s._v("application Flask 程序，包含业务逻辑代码、数据模型和静态文件等")]),s._v(" "),a("p",[s._v("configs.py 项目配置")]),s._v(" "),a("p",[s._v("models 数据模型文件")]),s._v(" "),a("p",[s._v("templates 模板文件")]),s._v(" "),a("p",[s._v("static  存放静态文件，如 js、css 等文件")]),s._v(" "),a("p",[s._v("manage.py  启动 Web 程序以及其他的程序任务")]),s._v(" "),a("p",[s._v("requirements.txt  项目的安装依赖包")])])}),[],!1,null,null,null);n.default=t.exports}}]);