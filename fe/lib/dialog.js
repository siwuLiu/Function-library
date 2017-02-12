(function () {
  
  /**
   * 弹窗
   * option  {object}
   * @parame {string} option.pElClass     整个弹出蒙层的class名称
   * @parame {string} option.ctxElClass   弹窗的class名称
   * @parame {string} option.content      弹出窗的内容
   * @parame {number} option.width        设置弹窗的宽度， 默认： 300px
   * @parame {number} option.height       设置弹窗的高度， 默认： 200px
   * @parame {string} option.backgroundColor  设置弹窗的背景颜色， 默认： 白色（#fff）
   * @parame {int}    option.borderRadius     设置弹窗的圆角弧度， 默认： 4
   * @parame {float}  option.layerOpacity     设置蒙层的透明度， 默认： 0.7
   * @parame {object} option.settingsStyle    自定义弹窗样式
   */
  var Dialog = function (option) {
    var defaultConfig = {
      pElClass: 'dg-parents-wrap',
      ctxElClass: 'dg-ctx-wrap',
      content: '',
      width: 300,
      height: 200,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 4,
      layerOpacity: 0.7,
      settingsStyle: {},
    };
    
    this.dgConfig = $.extend(defaultConfig, option)

    this.init();
    return this;
  }

  Dialog.prototype = {
    init: function () {
      this.creatWrap();
    },
    creatWrap: function () {
      this.pEl = document.createElement('div');
      this.pEl.className = this.dgConfig.pElClass;

      this.ctxEl = document.createElement('div');
      this.ctxEl.className = this.dgConfig.ctxElClass;

      this.pEl.appendChild(this.ctxEl);

      $('body').append(this.pEl);

      this.addContent();
      this.styleConfig();

    },

    addContent: function () {
      var that = this;

      $('.' + that.dgConfig.ctxElClass).append(that.dgConfig.content);

    },
    styleConfig: function () {
      var that = this,
        pElScreenX = 0, pElscreenY = 0, ctxElClassScreenX = 0,
        ctxElClassScreenY = 0, ctxTop = 15;


      $('.' + that.dgConfig.pElClass).css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '900',
        background: 'rgba(0,0,0, '+ that.dgConfig.layerOpacity +')',
        overflow: 'auto',
      })


      $('.' + that.dgConfig.ctxElClass).css($.extend({
        position: 'absolute',
        display: 'inline-block',
        minWidth: that.dgConfig.width,
        minHeight: that.dgConfig.height,
        background: that.dgConfig.backgroundColor,
        borderRadius: that.dgConfig.borderRadius,
        zIndex: '2',
      }, that.dgConfig.settingsStyle))
      
      // 居中
      pElScreenX = $('.' + that.dgConfig.pElClass).width(),
      pElscreenY = $('.' + that.dgConfig.pElClass).height(),
      ctxElClassScreenX = $('.' + that.dgConfig.ctxElClass).width(),
      ctxElClassScreenY = $('.' + that.dgConfig.ctxElClass).height();

      ctxElClassScreenY > (window.innerHeight-30) ? ctxTop = '15px' : ctxTop = ((window.innerHeight-ctxElClassScreenY)/2 + 'px');

      $('.' + that.dgConfig.ctxElClass).css({
        top: ctxTop,
        left: '50%',
        // marginTop: (ctxElClassScreenY > (window.screen.height-30)? 0 : -(ctxElClassScreenY/2)),
        marginLeft: -(ctxElClassScreenX/2)
      });
    },
    show: function () {
      $('.' + this.dgConfig.pElClass).show();
    },
    hide: function () {
      $('.' + this.dgConfig.pElClass).hide();
    },
    close: function () {
      $('.' + this.dgConfig.pElClass).remove();
    }

  }

  var Dg = window.$dg = Dialog;

  return Dg;
})()