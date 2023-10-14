!(function () {
  var e = {
      941: function (e) {
        e.exports =
          '<div class="dz-preview dz-file-preview"> <div class="dz-image"><img data-dz-thumbnail/></div> <div class="dz-details"> <div class="dz-size"><span data-dz-size></span></div> <div class="dz-filename"><span data-dz-name></span></div> </div> <div class="dz-progress"> <span class="dz-upload" data-dz-uploadprogress></span> </div> <div class="dz-error-message"><span data-dz-errormessage></span></div> <div class="dz-success-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Check</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path> </g> </svg> </div> <div class="dz-error-mark"> <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>Error</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475"> <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path> </g> </g> </svg> </div> </div> ';
      },
    },
    t = {};
  function i(s) {
    var n = t[s];
    if (void 0 !== n) return n.exports;
    var l = (t[s] = { exports: {} });
    return e[s](l, l.exports, i), l.exports;
  }
  (i.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return i.d(t, { a: t }), t;
  }),
    (i.d = function (e, t) {
      for (var s in t)
        i.o(t, s) &&
          !i.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      "use strict";
      class e {
        on(e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks[e] || (this._callbacks[e] = []),
            this._callbacks[e].push(t),
            this
          );
        }
        emit(e, ...t) {
          this._callbacks = this._callbacks || {};
          let i = this._callbacks[e];
          if (i) for (let e of i) e.apply(this, t);
          return (
            this.element &&
              this.element.dispatchEvent(
                this.makeEvent("dropzone:" + e, { args: t })
              ),
            this
          );
        }
        makeEvent(e, t) {
          let i = { bubbles: !0, cancelable: !0, detail: t };
          if ("function" == typeof window.CustomEvent)
            return new CustomEvent(e, i);
          var s = document.createEvent("CustomEvent");
          return s.initCustomEvent(e, i.bubbles, i.cancelable, i.detail), s;
        }
        off(e, t) {
          if (!this._callbacks || 0 === arguments.length)
            return (this._callbacks = {}), this;
          let i = this._callbacks[e];
          if (!i) return this;
          if (1 === arguments.length) return delete this._callbacks[e], this;
          for (let e = 0; e < i.length; e++) {
            if (i[e] === t) {
              i.splice(e, 1);
              break;
            }
          }
          return this;
        }
      }
      var t = i(941);
      var s = {
        url: null,
        method: "post",
        withCredentials: !1,
        timeout: null,
        parallelUploads: 2,
        uploadMultiple: !1,
        chunking: !1,
        forceChunking: !1,
        chunkSize: 2e6,
        parallelChunkUploads: !1,
        retryChunks: !1,
        retryChunksLimit: 3,
        maxFilesize: 256,
        paramName: "file",
        createImageThumbnails: !0,
        maxThumbnailFilesize: 10,
        thumbnailWidth: 120,
        thumbnailHeight: 120,
        thumbnailMethod: "crop",
        resizeWidth: null,
        resizeHeight: null,
        resizeMimeType: null,
        resizeQuality: 0.8,
        resizeMethod: "contain",
        filesizeBase: 1e3,
        maxFiles: null,
        headers: null,
        clickable: !0,
        ignoreHiddenFiles: !0,
        acceptedFiles: null,
        acceptedMimeTypes: null,
        autoProcessQueue: !0,
        autoQueue: !0,
        addRemoveLinks: !1,
        previewsContainer: null,
        disablePreviews: !1,
        hiddenInputContainer: "body",
        capture: null,
        renameFilename: null,
        renameFile: null,
        forceFallback: !1,
        dictDefaultMessage: "Drop files here to upload",
        dictFallbackMessage:
          "Your browser does not support drag'n'drop file uploads.",
        dictFallbackText:
          "Please use the fallback form below to upload your files like in the olden days.",
        dictFileTooBig:
          "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
        dictInvalidFileType: "You can't upload files of this type.",
        dictResponseError: "Server responded with {{statusCode}} code.",
        dictCancelUpload: "Cancel upload",
        dictUploadCanceled: "Upload canceled.",
        dictCancelUploadConfirmation:
          "Are you sure you want to cancel this upload?",
        dictRemoveFile: "Remove file",
        dictRemoveFileConfirmation: null,
        dictMaxFilesExceeded: "You can not upload any more files.",
        dictFileSizeUnits: { tb: "TB", gb: "GB", mb: "MB", kb: "KB", b: "b" },
        init() {},
        params(e, t, i) {
          if (i)
            return {
              dzuuid: i.file.upload.uuid,
              dzchunkindex: i.index,
              dztotalfilesize: i.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: i.file.upload.totalChunkCount,
              dzchunkbyteoffset: i.index * this.options.chunkSize,
            };
        },
        accept: (e, t) => t(),
        chunksUploaded: function (e, t) {
          t();
        },
        fallback() {
          let e;
          this.element.className = `${this.element.className} dz-browser-not-supported`;
          for (let t of this.element.getElementsByTagName("div"))
            if (/(^| )dz-message($| )/.test(t.className)) {
              (e = t), (t.className = "dz-message");
              break;
            }
          e ||
            ((e = n.createElement(
              '<div class="dz-message"><span></span></div>'
            )),
            this.element.appendChild(e));
          let t = e.getElementsByTagName("span")[0];
          return (
            t &&
              (null != t.textContent
                ? (t.textContent = this.options.dictFallbackMessage)
                : null != t.innerText &&
                  (t.innerText = this.options.dictFallbackMessage)),
            this.element.appendChild(this.getFallbackForm())
          );
        },
        resize(e, t, i, s) {
          let n = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height },
            l = e.width / e.height;
          null == t && null == i
            ? ((t = n.srcWidth), (i = n.srcHeight))
            : null == t
            ? (t = i * l)
            : null == i && (i = t / l);
          let r =
            (t = Math.min(t, n.srcWidth)) / (i = Math.min(i, n.srcHeight));
          if (n.srcWidth > t || n.srcHeight > i)
            if ("crop" === s)
              l > r
                ? ((n.srcHeight = e.height), (n.srcWidth = n.srcHeight * r))
                : ((n.srcWidth = e.width), (n.srcHeight = n.srcWidth / r));
            else {
              if ("contain" !== s)
                throw new Error(`Unknown resizeMethod '${s}'`);
              l > r ? (i = t / l) : (t = i * l);
            }
          return (
            (n.srcX = (e.width - n.srcWidth) / 2),
            (n.srcY = (e.height - n.srcHeight) / 2),
            (n.trgWidth = t),
            (n.trgHeight = i),
            n
          );
        },
        transformFile(e, t) {
          return (this.options.resizeWidth || this.options.resizeHeight) &&
            e.type.match(/image.*/)
            ? this.resizeImage(
                e,
                this.options.resizeWidth,
                this.options.resizeHeight,
                this.options.resizeMethod,
                t
              )
            : t(e);
        },
        previewTemplate: i.n(t)(),
        drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart(e) {},
        dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste(e) {},
        reset() {
          return this.element.classList.remove("dz-started");
        },
        addedfile(e) {
          if (
            (this.element === this.previewsContainer &&
              this.element.classList.add("dz-started"),
            this.previewsContainer && !this.options.disablePreviews)
          ) {
            for (var t of ((e.previewElement = n.createElement(
              this.options.previewTemplate.trim()
            )),
            (e.previewTemplate = e.previewElement),
            this.previewsContainer.appendChild(e.previewElement),
            e.previewElement.querySelectorAll("[data-dz-name]")))
              t.textContent = e.name;
              console.log({e})
            for (t of e.previewElement.querySelectorAll("[data-dz-size]"))
              t.innerHTML = this.filesize(e.size);
            this.options.addRemoveLinks &&
              ((e._removeLink = n.createElement(
                `<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`
              )),
              e.previewElement.appendChild(e._removeLink));
            let i = (t) => (
              t.preventDefault(),
              t.stopPropagation(),
              e.status === n.UPLOADING
                ? n.confirm(this.options.dictCancelUploadConfirmation, () =>
                    this.removeFile(e)
                  )
                : this.options.dictRemoveFileConfirmation
                ? n.confirm(this.options.dictRemoveFileConfirmation, () =>
                    this.removeFile(e)
                  )
                : this.removeFile(e)
            );
            for (let t of e.previewElement.querySelectorAll("[data-dz-remove]"))
              t.addEventListener("click", i);
          }
        },
        removedfile(e) {
          return (
            null != e.previewElement &&
              null != e.previewElement.parentNode &&
              e.previewElement.parentNode.removeChild(e.previewElement),
            this._updateMaxFilesReachedClass()
          );
        },
        thumbnail(e, t) {
          if (e.previewElement) {
            e.previewElement.classList.remove("dz-file-preview");
            for (let i of e.previewElement.querySelectorAll(
              "[data-dz-thumbnail]"
            ))
              (i.alt = e.name), (i.src = t);
            return setTimeout(
              () => e.previewElement.classList.add("dz-image-preview"),
              1
            );
          }
        },
        error(e, t) {
          if (e.previewElement) {
            e.previewElement.classList.add("dz-error"),
              "string" != typeof t && t.error && (t = t.error);
            for (let i of e.previewElement.querySelectorAll(
              "[data-dz-errormessage]"
            ))
              i.textContent = t;
          }
        },
        errormultiple() {},
        processing(e) {
          if (
            e.previewElement &&
            (e.previewElement.classList.add("dz-processing"), e._removeLink)
          )
            return (e._removeLink.innerHTML = this.options.dictCancelUpload);
        },
        processingmultiple() {},
        uploadprogress(e, t, i) {
          if (e.previewElement)
            for (let i of e.previewElement.querySelectorAll(
              "[data-dz-uploadprogress]"
            ))
              "PROGRESS" === i.nodeName
                ? (i.value = t)
                : (i.style.width = `${t}%`);
        },
        totaluploadprogress() {},
        sending() {},
        sendingmultiple() {},
        success(e) {
          if (e.previewElement)
            return e.previewElement.classList.add("dz-success");
        },
        successmultiple() {},
        canceled(e) {
          return this.emit("error", e, this.options.dictUploadCanceled);
        },
        canceledmultiple() {},
        complete(e) {
          if (
            (e._removeLink &&
              (e._removeLink.innerHTML = this.options.dictRemoveFile),
            e.previewElement)
          )
            return e.previewElement.classList.add("dz-complete");
        },
        completemultiple() {},
        maxfilesexceeded() {},
        maxfilesreached() {},
        queuecomplete() {},
        addedfiles() {},
      };
      class n extends e {
        static initClass() {
          (this.prototype.Emitter = e),
            (this.prototype.events = [
              "drop",
              "dragstart",
              "dragend",
              "dragenter",
              "dragover",
              "dragleave",
              "addedfile",
              "addedfiles",
              "removedfile",
              "thumbnail",
              "error",
              "errormultiple",
              "processing",
              "processingmultiple",
              "uploadprogress",
              "totaluploadprogress",
              "sending",
              "sendingmultiple",
              "success",
              "successmultiple",
              "canceled",
              "canceledmultiple",
              "complete",
              "completemultiple",
              "reset",
              "maxfilesexceeded",
              "maxfilesreached",
              "queuecomplete",
            ]),
            (this.prototype._thumbnailQueue = []),
            (this.prototype._processingThumbnail = !1);
        }
        static extend(e, ...t) {
          for (let i of t)
            for (let t in i) {
              let s = i[t];
              e[t] = s;
            }
          return e;
        }
        constructor(e, t) {
          let i, l;
          if (
            (super(),
            (this.element = e),
            (this.version = n.version),
            (this.clickableElements = []),
            (this.listeners = []),
            (this.files = []),
            "string" == typeof this.element &&
              (this.element = document.querySelector(this.element)),
            !this.element || null == this.element.nodeType)
          )
            throw new Error("Invalid dropzone element.");
          if (this.element.dropzone)
            throw new Error("Dropzone already attached.");
          n.instances.push(this), (this.element.dropzone = this);
          let r = null != (l = n.optionsForElement(this.element)) ? l : {};
          if (
            ((this.options = n.extend({}, s, r, null != t ? t : {})),
            (this.options.previewTemplate =
              this.options.previewTemplate.replace(/\n*/g, "")),
            this.options.forceFallback || !n.isBrowserSupported())
          )
            return this.options.fallback.call(this);
          if (
            (null == this.options.url &&
              (this.options.url = this.element.getAttribute("action")),
            !this.options.url)
          )
            throw new Error("No URL provided.");
          if (this.options.acceptedFiles && this.options.acceptedMimeTypes)
            throw new Error(
              "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
            );
          if (this.options.uploadMultiple && this.options.chunking)
            throw new Error(
              "You cannot set both: uploadMultiple and chunking."
            );
          this.options.acceptedMimeTypes &&
            ((this.options.acceptedFiles = this.options.acceptedMimeTypes),
            delete this.options.acceptedMimeTypes),
            null != this.options.renameFilename &&
              (this.options.renameFile = (e) =>
                this.options.renameFilename.call(this, e.name, e)),
            "string" == typeof this.options.method &&
              (this.options.method = this.options.method.toUpperCase()),
            (i = this.getExistingFallback()) &&
              i.parentNode &&
              i.parentNode.removeChild(i),
            !1 !== this.options.previewsContainer &&
              (this.options.previewsContainer
                ? (this.previewsContainer = n.getElement(
                    this.options.previewsContainer,
                    "previewsContainer"
                  ))
                : (this.previewsContainer = this.element)),
            this.options.clickable &&
              (!0 === this.options.clickable
                ? (this.clickableElements = [this.element])
                : (this.clickableElements = n.getElements(
                    this.options.clickable,
                    "clickable"
                  ))),
            this.init();
        }
        getAcceptedFiles() {
          return this.files.filter((e) => e.accepted).map((e) => e);
        }
        getRejectedFiles() {
          return this.files.filter((e) => !e.accepted).map((e) => e);
        }
        getFilesWithStatus(e) {
          return this.files.filter((t) => t.status === e).map((e) => e);
        }
        getQueuedFiles() {
          return this.getFilesWithStatus(n.QUEUED);
        }
        getUploadingFiles() {
          return this.getFilesWithStatus(n.UPLOADING);
        }
        getAddedFiles() {
          return this.getFilesWithStatus(n.ADDED);
        }
        getActiveFiles() {
          return this.files
            .filter((e) => e.status === n.UPLOADING || e.status === n.QUEUED)
            .map((e) => e);
        }
        init() {
          if (
            ("form" === this.element.tagName &&
              this.element.setAttribute("enctype", "multipart/form-data"),
            this.element.classList.contains("dropzone") &&
              !this.element.querySelector(".dz-message") &&
              this.element.appendChild(
                n.createElement(
                  `<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`
                )
              ),
            this.clickableElements.length)
          ) {
            let e = () => {
              this.hiddenFileInput &&
                this.hiddenFileInput.parentNode.removeChild(
                  this.hiddenFileInput
                ),
                (this.hiddenFileInput = document.createElement("input")),
                this.hiddenFileInput.setAttribute("type", "file"),
                (null === this.options.maxFiles || this.options.maxFiles > 1) &&
                  this.hiddenFileInput.setAttribute("multiple", "multiple"),
                (this.hiddenFileInput.className = "dz-hidden-input"),
                null !== this.options.acceptedFiles &&
                  this.hiddenFileInput.setAttribute(
                    "accept",
                    this.options.acceptedFiles
                  ),
                null !== this.options.capture &&
                  this.hiddenFileInput.setAttribute(
                    "capture",
                    this.options.capture
                  ),
                this.hiddenFileInput.setAttribute("tabindex", "-1"),
                (this.hiddenFileInput.style.visibility = "hidden"),
                (this.hiddenFileInput.style.position = "absolute"),
                (this.hiddenFileInput.style.top = "0"),
                (this.hiddenFileInput.style.left = "0"),
                (this.hiddenFileInput.style.height = "0"),
                (this.hiddenFileInput.style.width = "0"),
                n
                  .getElement(
                    this.options.hiddenInputContainer,
                    "hiddenInputContainer"
                  )
                  .appendChild(this.hiddenFileInput),
                this.hiddenFileInput.addEventListener("change", () => {
                  let { files: t } = this.hiddenFileInput;
                  if (t.length) for (let e of t) this.addFile(e);
                  this.emit("addedfiles", t), e();
                });
            };
            e();
          }
          this.URL = null !== window.URL ? window.URL : window.webkitURL;
          for (let e of this.events) this.on(e, this.options[e]);
          this.on("uploadprogress", () => this.updateTotalUploadProgress()),
            this.on("removedfile", () => this.updateTotalUploadProgress()),
            this.on("canceled", (e) => this.emit("complete", e)),
            this.on("complete", (e) => {
              if (
                0 === this.getAddedFiles().length &&
                0 === this.getUploadingFiles().length &&
                0 === this.getQueuedFiles().length
              )
                return setTimeout(() => this.emit("queuecomplete"), 0);
            });
          let e = function (e) {
            if (
              (function (e) {
                if (e.dataTransfer.types)
                  for (var t = 0; t < e.dataTransfer.types.length; t++)
                    if ("Files" === e.dataTransfer.types[t]) return !0;
                return !1;
              })(e)
            )
              return (
                e.stopPropagation(),
                e.preventDefault ? e.preventDefault() : (e.returnValue = !1)
              );
          };
          return (
            (this.listeners = [
              {
                element: this.element,
                events: {
                  dragstart: (e) => this.emit("dragstart", e),
                  dragenter: (t) => (e(t), this.emit("dragenter", t)),
                  dragover: (t) => {
                    let i;
                    try {
                      i = t.dataTransfer.effectAllowed;
                    } catch (e) {}
                    return (
                      (t.dataTransfer.dropEffect =
                        "move" === i || "linkMove" === i ? "move" : "copy"),
                      e(t),
                      this.emit("dragover", t)
                    );
                  },
                  dragleave: (e) => this.emit("dragleave", e),
                  drop: (t) => (e(t), this.drop(t)),
                  dragend: (e) => this.emit("dragend", e),
                },
              },
            ]),
            this.clickableElements.forEach((e) =>
              this.listeners.push({
                element: e,
                events: {
                  click: (t) => (
                    (e !== this.element ||
                      t.target === this.element ||
                      n.elementInside(
                        t.target,
                        this.element.querySelector(".dz-message")
                      )) &&
                      this.hiddenFileInput.click(),
                    !0
                  ),
                },
              })
            ),
            this.enable(),
            this.options.init.call(this)
          );
        }
        destroy() {
          return (
            this.disable(),
            this.removeAllFiles(!0),
            (null != this.hiddenFileInput
              ? this.hiddenFileInput.parentNode
              : void 0) &&
              (this.hiddenFileInput.parentNode.removeChild(
                this.hiddenFileInput
              ),
              (this.hiddenFileInput = null)),
            delete this.element.dropzone,
            n.instances.splice(n.instances.indexOf(this), 1)
          );
        }
        updateTotalUploadProgress() {
          let e,
            t = 0,
            i = 0;
          if (this.getActiveFiles().length) {
            for (let e of this.getActiveFiles())
              (t += e.upload.bytesSent), (i += e.upload.total);
            e = (100 * t) / i;
          } else e = 100;
          return this.emit("totaluploadprogress", e, i, t);
        }
        _getParamName(e) {
          return "function" == typeof this.options.paramName
            ? this.options.paramName(e)
            : `${this.options.paramName}${
                this.options.uploadMultiple ? `[${e}]` : ""
              }`;
        }
        _renameFile(e) {
          return "function" != typeof this.options.renameFile
            ? e.name
            : this.options.renameFile(e);
        }
        getFallbackForm() {
          let e, t;
          if ((e = this.getExistingFallback())) return e;
          let i = '<div class="dz-fallback">';
          this.options.dictFallbackText &&
            (i += `<p>${this.options.dictFallbackText}</p>`),
            (i += `<input type="file" name="${this._getParamName(0)}" ${
              this.options.uploadMultiple ? 'multiple="multiple"' : void 0
            } /><input type="submit" value="Upload!"></div>`);
          let s = n.createElement(i);
          return (
            "FORM" !== this.element.tagName
              ? ((t = n.createElement(
                  `<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`
                )),
                t.appendChild(s))
              : (this.element.setAttribute("enctype", "multipart/form-data"),
                this.element.setAttribute("method", this.options.method)),
            null != t ? t : s
          );
        }
        getExistingFallback() {
          let e = function (e) {
            for (let t of e)
              if (/(^| )fallback($| )/.test(t.className)) return t;
          };
          for (let i of ["div", "form"]) {
            var t;
            if ((t = e(this.element.getElementsByTagName(i)))) return t;
          }
        }
        setupEventListeners() {
          return this.listeners.map((e) =>
            (() => {
              let t = [];
              for (let i in e.events) {
                let s = e.events[i];
                t.push(e.element.addEventListener(i, s, !1));
              }
              return t;
            })()
          );
        }
        removeEventListeners() {
          return this.listeners.map((e) =>
            (() => {
              let t = [];
              for (let i in e.events) {
                let s = e.events[i];
                t.push(e.element.removeEventListener(i, s, !1));
              }
              return t;
            })()
          );
        }
        disable() {
          return (
            this.clickableElements.forEach((e) =>
              e.classList.remove("dz-clickable")
            ),
            this.removeEventListeners(),
            (this.disabled = !0),
            this.files.map((e) => this.cancelUpload(e))
          );
        }
        enable() {
          return (
            delete this.disabled,
            this.clickableElements.forEach((e) =>
              e.classList.add("dz-clickable")
            ),
            this.setupEventListeners()
          );
        }
        filesize(e) {
          let t = 0,
            i = "b";
          if (e > 0) {
            let s = ["tb", "gb", "mb", "kb", "b"];
            for (let n = 0; n < s.length; n++) {
              let l = s[n];
              if (e >= Math.pow(this.options.filesizeBase, 4 - n) / 10) {
                (t = e / Math.pow(this.options.filesizeBase, 4 - n)), (i = l);
                break;
              }
            }
            t = Math.round(10 * t) / 10;
          }
          return `<strong>${t}</strong> ${this.options.dictFileSizeUnits[i]}`;
        }
        _updateMaxFilesReachedClass() {
          return null != this.options.maxFiles &&
            this.getAcceptedFiles().length >= this.options.maxFiles
            ? (this.getAcceptedFiles().length === this.options.maxFiles &&
                this.emit("maxfilesreached", this.files),
              this.element.classList.add("dz-max-files-reached"))
            : this.element.classList.remove("dz-max-files-reached");
        }
        drop(e) {
          if (!e.dataTransfer) return;
          this.emit("drop", e);
          let t = [];
          for (let i = 0; i < e.dataTransfer.files.length; i++)
            t[i] = e.dataTransfer.files[i];
          if (t.length) {
            let { items: i } = e.dataTransfer;
            i && i.length && null != i[0].webkitGetAsEntry
              ? this._addFilesFromItems(i)
              : this.handleFiles(t);
          }
          this.emit("addedfiles", t);
        }
        paste(e) {
          if (
            null ==
            ((t = null != e ? e.clipboardData : void 0),
            (i = (e) => e.items),
            null != t ? i(t) : void 0)
          )
            return;
          var t, i;
          this.emit("paste", e);
          let { items: s } = e.clipboardData;
          return s.length ? this._addFilesFromItems(s) : void 0;
        }
        handleFiles(e) {
          for (let t of e) this.addFile(t);
        }
        _addFilesFromItems(e) {
          return (() => {
            let t = [];
            for (let s of e) {
              var i;
              null != s.webkitGetAsEntry && (i = s.webkitGetAsEntry())
                ? i.isFile
                  ? t.push(this.addFile(s.getAsFile()))
                  : i.isDirectory
                  ? t.push(this._addFilesFromDirectory(i, i.name))
                  : t.push(void 0)
                : null != s.getAsFile && (null == s.kind || "file" === s.kind)
                ? t.push(this.addFile(s.getAsFile()))
                : t.push(void 0);
            }
            return t;
          })();
        }
        _addFilesFromDirectory(e, t) {
          let i = e.createReader(),
            s = (e) => {
              return (
                (t = console),
                (i = "log"),
                (s = (t) => t.log(e)),
                null != t && "function" == typeof t[i] ? s(t, i) : void 0
              );
              var t, i, s;
            };
          var n = () =>
            i.readEntries((e) => {
              if (e.length > 0) {
                for (let i of e)
                  i.isFile
                    ? i.file((e) => {
                        if (
                          !this.options.ignoreHiddenFiles ||
                          "." !== e.name.substring(0, 1)
                        )
                          return (
                            (e.fullPath = `${t}/${e.name}`), this.addFile(e)
                          );
                      })
                    : i.isDirectory &&
                      this._addFilesFromDirectory(i, `${t}/${i.name}`);
                n();
              }
              return null;
            }, s);
          return n();
        }
        accept(e, t) {
          this.options.maxFilesize &&
          e.size > 1024 * this.options.maxFilesize * 1024
            ? t(
                this.options.dictFileTooBig
                  .replace(
                    "{{filesize}}",
                    Math.round(e.size / 1024 / 10.24) / 100
                  )
                  .replace("{{maxFilesize}}", this.options.maxFilesize)
              )
            : n.isValidFile(e, this.options.acceptedFiles)
            ? null != this.options.maxFiles &&
              this.getAcceptedFiles().length >= this.options.maxFiles
              ? (t(
                  this.options.dictMaxFilesExceeded.replace(
                    "{{maxFiles}}",
                    this.options.maxFiles
                  )
                ),
                this.emit("maxfilesexceeded", e))
              : this.options.accept.call(this, e, t)
            : t(this.options.dictInvalidFileType);
        }
        addFile(e) {
          (e.upload = {
            uuid: n.uuidv4(),
            progress: 0,
            total: e.size,
            bytesSent: 0,
            filename: this._renameFile(e),
          }),
            this.files.push(e),
            (e.status = n.ADDED),
            this.emit("addedfile", e),
            this._enqueueThumbnail(e),
            this.accept(e, (t) => {
              t
                ? ((e.accepted = !1), this._errorProcessing([e], t))
                : ((e.accepted = !0),
                  this.options.autoQueue && this.enqueueFile(e)),
                this._updateMaxFilesReachedClass();
            });
        }
        enqueueFiles(e) {
          for (let t of e) this.enqueueFile(t);
          return null;
        }
        enqueueFile(e) {
          if (e.status !== n.ADDED || !0 !== e.accepted)
            throw new Error(
              "This file can't be queued because it has already been processed or was rejected."
            );
          if (((e.status = n.QUEUED), this.options.autoProcessQueue))
            return setTimeout(() => this.processQueue(), 0);
        }
        _enqueueThumbnail(e) {
          if (
            this.options.createImageThumbnails &&
            e.type.match(/image.*/) &&
            e.size <= 1024 * this.options.maxThumbnailFilesize * 1024
          )
            return (
              this._thumbnailQueue.push(e),
              setTimeout(() => this._processThumbnailQueue(), 0)
            );
        }
        _processThumbnailQueue() {
          if (this._processingThumbnail || 0 === this._thumbnailQueue.length)
            return;
          this._processingThumbnail = !0;
          let e = this._thumbnailQueue.shift();
          return this.createThumbnail(
            e,
            this.options.thumbnailWidth,
            this.options.thumbnailHeight,
            this.options.thumbnailMethod,
            !0,
            (t) => (
              this.emit("thumbnail", e, t),
              (this._processingThumbnail = !1),
              this._processThumbnailQueue()
            )
          );
        }
        removeFile(e) {
          if (
            (e.status === n.UPLOADING && this.cancelUpload(e),
            (this.files = l(this.files, e)),
            this.emit("removedfile", e),
            0 === this.files.length)
          )
            return this.emit("reset");
        }
        removeAllFiles(e) {
          null == e && (e = !1);
          for (let t of this.files.slice())
            (t.status !== n.UPLOADING || e) && this.removeFile(t);
          return null;
        }
        resizeImage(e, t, i, s, l) {
          return this.createThumbnail(e, t, i, s, !0, (t, i) => {
            if (null == i) return l(e);
            {
              let { resizeMimeType: t } = this.options;
              null == t && (t = e.type);
              let s = i.toDataURL(t, this.options.resizeQuality);
              return (
                ("image/jpeg" !== t && "image/jpg" !== t) ||
                  (s = a.restore(e.dataURL, s)),
                l(n.dataURItoBlob(s))
              );
            }
          });
        }
        createThumbnail(e, t, i, s, n, l) {
          let r = new FileReader();
          (r.onload = () => {
            (e.dataURL = r.result),
              "image/svg+xml" !== e.type
                ? this.createThumbnailFromUrl(e, t, i, s, n, l)
                : null != l && l(r.result);
          }),
            r.readAsDataURL(e);
        }
        displayExistingFile(e, t, i, s, n = !0) {
          if ((this.emit("addedfile", e), this.emit("complete", e), n)) {
            let n = (t) => {
              this.emit("thumbnail", e, t), i && i();
            };
            (e.dataURL = t),
              this.createThumbnailFromUrl(
                e,
                this.options.thumbnailWidth,
                this.options.thumbnailHeight,
                this.options.thumbnailMethod,
                this.options.fixOrientation,
                n,
                s
              );
          } else this.emit("thumbnail", e, t), i && i();
        }
        createThumbnailFromUrl(e, t, i, s, n, l, r) {
          let a = document.createElement("img");
          return (
            r && (a.crossOrigin = r),
            (n =
              "from-image" !=
                getComputedStyle(document.body).imageOrientation && n),
            (a.onload = () => {
              let r = (e) => e(1);
              return (
                "undefined" != typeof EXIF &&
                  null !== EXIF &&
                  n &&
                  (r = (e) =>
                    EXIF.getData(a, function () {
                      return e(EXIF.getTag(this, "Orientation"));
                    })),
                r((n) => {
                  (e.width = a.width), (e.height = a.height);
                  let r = this.options.resize.call(this, e, t, i, s),
                    d = document.createElement("canvas"),
                    u = d.getContext("2d");
                  switch (
                    ((d.width = r.trgWidth),
                    (d.height = r.trgHeight),
                    n > 4 && ((d.width = r.trgHeight), (d.height = r.trgWidth)),
                    n)
                  ) {
                    case 2:
                      u.translate(d.width, 0), u.scale(-1, 1);
                      break;
                    case 3:
                      u.translate(d.width, d.height), u.rotate(Math.PI);
                      break;
                    case 4:
                      u.translate(0, d.height), u.scale(1, -1);
                      break;
                    case 5:
                      u.rotate(0.5 * Math.PI), u.scale(1, -1);
                      break;
                    case 6:
                      u.rotate(0.5 * Math.PI), u.translate(0, -d.width);
                      break;
                    case 7:
                      u.rotate(0.5 * Math.PI),
                        u.translate(d.height, -d.width),
                        u.scale(-1, 1);
                      break;
                    case 8:
                      u.rotate(-0.5 * Math.PI), u.translate(-d.height, 0);
                  }
                  o(
                    u,
                    a,
                    null != r.srcX ? r.srcX : 0,
                    null != r.srcY ? r.srcY : 0,
                    r.srcWidth,
                    r.srcHeight,
                    null != r.trgX ? r.trgX : 0,
                    null != r.trgY ? r.trgY : 0,
                    r.trgWidth,
                    r.trgHeight
                  );
                  let h = d.toDataURL("image/png");
                  if (null != l) return l(h, d);
                })
              );
            }),
            null != l && (a.onerror = l),
            (a.src = e.dataURL)
          );
        }
        processQueue() {
          let { parallelUploads: e } = this.options,
            t = this.getUploadingFiles().length,
            i = t;
          if (t >= e) return;
          let s = this.getQueuedFiles();
          if (s.length > 0) {
            if (this.options.uploadMultiple)
              return this.processFiles(s.slice(0, e - t));
            for (; i < e; ) {
              if (!s.length) return;
              this.processFile(s.shift()), i++;
            }
          }
        }
        processFile(e) {
          return this.processFiles([e]);
        }
        processFiles(e) {
          for (let t of e)
            (t.processing = !0),
              (t.status = n.UPLOADING),
              this.emit("processing", t);
          return (
            this.options.uploadMultiple && this.emit("processingmultiple", e),
            this.uploadFiles(e)
          );
        }
        _getFilesWithXhr(e) {
          return this.files.filter((t) => t.xhr === e).map((e) => e);
        }
        cancelUpload(e) {
          if (e.status === n.UPLOADING) {
            let t = this._getFilesWithXhr(e.xhr);
            for (let e of t) e.status = n.CANCELED;
            void 0 !== e.xhr && e.xhr.abort();
            for (let e of t) this.emit("canceled", e);
            this.options.uploadMultiple && this.emit("canceledmultiple", t);
          } else
            (e.status !== n.ADDED && e.status !== n.QUEUED) ||
              ((e.status = n.CANCELED),
              this.emit("canceled", e),
              this.options.uploadMultiple &&
                this.emit("canceledmultiple", [e]));
          if (this.options.autoProcessQueue) return this.processQueue();
        }
        resolveOption(e, ...t) {
          return "function" == typeof e ? e.apply(this, t) : e;
        }
        uploadFile(e) {
          return this.uploadFiles([e]);
        }
        uploadFiles(e) {
          this._transformFiles(e, (t) => {
            if (this.options.chunking) {
              let i = t[0];
              (e[0].upload.chunked =
                this.options.chunking &&
                (this.options.forceChunking ||
                  i.size > this.options.chunkSize)),
                (e[0].upload.totalChunkCount = Math.ceil(
                  i.size / this.options.chunkSize
                ));
            }
            if (e[0].upload.chunked) {
              let i = e[0],
                s = t[0],
                l = 0;
              i.upload.chunks = [];
              let r = () => {
                let t = 0;
                for (; void 0 !== i.upload.chunks[t]; ) t++;
                if (t >= i.upload.totalChunkCount) return;
                l++;
                let r = t * this.options.chunkSize,
                  o = Math.min(r + this.options.chunkSize, s.size),
                  a = {
                    name: this._getParamName(0),
                    data: s.webkitSlice ? s.webkitSlice(r, o) : s.slice(r, o),
                    filename: i.upload.filename,
                    chunkIndex: t,
                  };
                (i.upload.chunks[t] = {
                  file: i,
                  index: t,
                  dataBlock: a,
                  status: n.UPLOADING,
                  progress: 0,
                  retries: 0,
                }),
                  this._uploadData(e, [a]);
              };
              if (
                ((i.upload.finishedChunkUpload = (t, s) => {
                  let l = !0;
                  (t.status = n.SUCCESS), (t.dataBlock = null), (t.xhr = null);
                  for (let e = 0; e < i.upload.totalChunkCount; e++) {
                    if (void 0 === i.upload.chunks[e]) return r();
                    i.upload.chunks[e].status !== n.SUCCESS && (l = !1);
                  }
                  l &&
                    this.options.chunksUploaded(i, () => {
                      this._finished(e, s, null);
                    });
                }),
                this.options.parallelChunkUploads)
              )
                for (let e = 0; e < i.upload.totalChunkCount; e++) r();
              else r();
            } else {
              let i = [];
              for (let s = 0; s < e.length; s++)
                i[s] = {
                  name: this._getParamName(s),
                  data: t[s],
                  filename: e[s].upload.filename,
                };
              this._uploadData(e, i);
            }
          });
        }
        _getChunk(e, t) {
          for (let i = 0; i < e.upload.totalChunkCount; i++)
            if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t)
              return e.upload.chunks[i];
        }
        _uploadData(e, t) {
          let i = new XMLHttpRequest();
          for (let t of e) t.xhr = i;
          e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = i);
          let s = this.resolveOption(this.options.method, e),
            l = this.resolveOption(this.options.url, e);
          i.open(s, l, !0),
            this.resolveOption(this.options.timeout, e) &&
              (i.timeout = this.resolveOption(this.options.timeout, e)),
            (i.withCredentials = !!this.options.withCredentials),
            (i.onload = (t) => {
              this._finishedUploading(e, i, t);
            }),
            (i.ontimeout = () => {
              this._handleUploadError(
                e,
                i,
                `Request timedout after ${this.options.timeout / 1e3} seconds`
              );
            }),
            (i.onerror = () => {
              this._handleUploadError(e, i);
            }),
            ((null != i.upload ? i.upload : i).onprogress = (t) =>
              this._updateFilesUploadProgress(e, i, t));
          let r = {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            "X-Requested-With": "XMLHttpRequest",
          };
          this.options.headers && n.extend(r, this.options.headers);
          for (let e in r) {
            let t = r[e];
            t && i.setRequestHeader(e, t);
          }
          let o = new FormData();
          if (this.options.params) {
            let t = this.options.params;
            "function" == typeof t &&
              (t = t.call(
                this,
                e,
                i,
                e[0].upload.chunked ? this._getChunk(e[0], i) : null
              ));
            for (let e in t) {
              let i = t[e];
              if (Array.isArray(i))
                for (let t = 0; t < i.length; t++) o.append(e, i[t]);
              else o.append(e, i);
            }
          }
          for (let t of e) this.emit("sending", t, i, o);
          this.options.uploadMultiple && this.emit("sendingmultiple", e, i, o),
            this._addFormElementData(o);
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            o.append(i.name, i.data, i.filename);
          }
          this.submitRequest(i, o, e);
        }
        _transformFiles(e, t) {
          let i = [],
            s = 0;
          for (let n = 0; n < e.length; n++)
            this.options.transformFile.call(this, e[n], (l) => {
              (i[n] = l), ++s === e.length && t(i);
            });
        }
        _addFormElementData(e) {
          if ("FORM" === this.element.tagName)
            for (let t of this.element.querySelectorAll(
              "input, textarea, select, button"
            )) {
              let i = t.getAttribute("name"),
                s = t.getAttribute("type");
              if ((s && (s = s.toLowerCase()), null != i))
                if ("SELECT" === t.tagName && t.hasAttribute("multiple"))
                  for (let s of t.options) s.selected && e.append(i, s.value);
                else
                  (!s || ("checkbox" !== s && "radio" !== s) || t.checked) &&
                    e.append(i, t.value);
            }
        }
        _updateFilesUploadProgress(e, t, i) {
          if (e[0].upload.chunked) {
            let s = e[0],
              n = this._getChunk(s, t);
            i
              ? ((n.progress = (100 * i.loaded) / i.total),
                (n.total = i.total),
                (n.bytesSent = i.loaded))
              : ((n.progress = 100), (n.bytesSent = n.total)),
              (s.upload.progress = 0),
              (s.upload.total = 0),
              (s.upload.bytesSent = 0);
            for (let e = 0; e < s.upload.totalChunkCount; e++)
              s.upload.chunks[e] &&
                void 0 !== s.upload.chunks[e].progress &&
                ((s.upload.progress += s.upload.chunks[e].progress),
                (s.upload.total += s.upload.chunks[e].total),
                (s.upload.bytesSent += s.upload.chunks[e].bytesSent));
            (s.upload.progress = s.upload.progress / s.upload.totalChunkCount),
              this.emit(
                "uploadprogress",
                s,
                s.upload.progress,
                s.upload.bytesSent
              );
          } else
            for (let t of e)
              (t.upload.total &&
                t.upload.bytesSent &&
                t.upload.bytesSent == t.upload.total) ||
                (i
                  ? ((t.upload.progress = (100 * i.loaded) / i.total),
                    (t.upload.total = i.total),
                    (t.upload.bytesSent = i.loaded))
                  : ((t.upload.progress = 100),
                    (t.upload.bytesSent = t.upload.total)),
                this.emit(
                  "uploadprogress",
                  t,
                  t.upload.progress,
                  t.upload.bytesSent
                ));
        }
        _finishedUploading(e, t, i) {
          let s;
          if (e[0].status !== n.CANCELED && 4 === t.readyState) {
            if (
              "arraybuffer" !== t.responseType &&
              "blob" !== t.responseType &&
              ((s = t.responseText),
              t.getResponseHeader("content-type") &&
                ~t
                  .getResponseHeader("content-type")
                  .indexOf("application/json"))
            )
              try {
                s = JSON.parse(s);
              } catch (e) {
                (i = e), (s = "Invalid JSON response from server.");
              }
            this._updateFilesUploadProgress(e, t),
              200 <= t.status && t.status < 300
                ? e[0].upload.chunked
                  ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t), s)
                  : this._finished(e, s, i)
                : this._handleUploadError(e, t, s);
          }
        }
        _handleUploadError(e, t, i) {
          if (e[0].status !== n.CANCELED) {
            if (e[0].upload.chunked && this.options.retryChunks) {
              let i = this._getChunk(e[0], t);
              if (i.retries++ < this.options.retryChunksLimit)
                return void this._uploadData(e, [i.dataBlock]);
              console.warn("Retried this chunk too often. Giving up.");
            }
            this._errorProcessing(
              e,
              i ||
                this.options.dictResponseError.replace(
                  "{{statusCode}}",
                  t.status
                ),
              t
            );
          }
        }
        submitRequest(e, t, i) {
          1 == e.readyState
            ? e.send(t)
            : console.warn(
                "Cannot send this request because the XMLHttpRequest.readyState is not OPENED."
              );
        }
        _finished(e, t, i) {
          for (let s of e)
            (s.status = n.SUCCESS),
              this.emit("success", s, t, i),
              this.emit("complete", s);
          if (
            (this.options.uploadMultiple &&
              (this.emit("successmultiple", e, t, i),
              this.emit("completemultiple", e)),
            this.options.autoProcessQueue)
          )
            return this.processQueue();
        }
        _errorProcessing(e, t, i) {
          for (let s of e)
            (s.status = n.ERROR),
              this.emit("error", s, t, i),
              this.emit("complete", s);
          if (
            (this.options.uploadMultiple &&
              (this.emit("errormultiple", e, t, i),
              this.emit("completemultiple", e)),
            this.options.autoProcessQueue)
          )
            return this.processQueue();
        }
        static uuidv4() {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              let t = (16 * Math.random()) | 0;
              return ("x" === e ? t : (3 & t) | 8).toString(16);
            }
          );
        }
      }
      n.initClass(),
        (n.version = "dev"),
        (n.options = {}),
        (n.optionsForElement = function (e) {
          return e.getAttribute("id")
            ? n.options[r(e.getAttribute("id"))]
            : void 0;
        }),
        (n.instances = []),
        (n.forElement = function (e) {
          if (
            ("string" == typeof e && (e = document.querySelector(e)),
            null == (null != e ? e.dropzone : void 0))
          )
            throw new Error(
              "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
            );
          return e.dropzone;
        }),
        (n.autoDiscover = !0),
        (n.discover = function () {
          let e;
          if (document.querySelectorAll)
            e = document.querySelectorAll(".dropzone");
          else {
            e = [];
            let t = (t) =>
              (() => {
                let i = [];
                for (let s of t)
                  /(^| )dropzone($| )/.test(s.className)
                    ? i.push(e.push(s))
                    : i.push(void 0);
                return i;
              })();
            t(document.getElementsByTagName("div")),
              t(document.getElementsByTagName("form"));
          }
          return (() => {
            let t = [];
            for (let i of e)
              !1 !== n.optionsForElement(i) ? t.push(new n(i)) : t.push(void 0);
            return t;
          })();
        }),
        (n.blockedBrowsers = [
          /opera.*(Macintosh|Windows Phone).*version\/12/i,
        ]),
        (n.isBrowserSupported = function () {
          let e = !0;
          if (
            window.File &&
            window.FileReader &&
            window.FileList &&
            window.Blob &&
            window.FormData &&
            document.querySelector
          )
            if ("classList" in document.createElement("a")) {
              void 0 !== n.blacklistedBrowsers &&
                (n.blockedBrowsers = n.blacklistedBrowsers);
              for (let t of n.blockedBrowsers)
                t.test(navigator.userAgent) && (e = !1);
            } else e = !1;
          else e = !1;
          return e;
        }),
        (n.dataURItoBlob = function (e) {
          let t = atob(e.split(",")[1]),
            i = e.split(",")[0].split(":")[1].split(";")[0],
            s = new ArrayBuffer(t.length),
            n = new Uint8Array(s);
          for (
            let e = 0, i = t.length, s = 0 <= i;
            s ? e <= i : e >= i;
            s ? e++ : e--
          )
            n[e] = t.charCodeAt(e);
          return new Blob([s], { type: i });
        });
      const l = (e, t) => e.filter((e) => e !== t).map((e) => e),
        r = (e) => e.replace(/[\-_](\w)/g, (e) => e.charAt(1).toUpperCase());
      (n.createElement = function (e) {
        let t = document.createElement("div");
        return (t.innerHTML = e), t.childNodes[0];
      }),
        (n.elementInside = function (e, t) {
          if (e === t) return !0;
          for (; (e = e.parentNode); ) if (e === t) return !0;
          return !1;
        }),
        (n.getElement = function (e, t) {
          let i;
          if (
            ("string" == typeof e
              ? (i = document.querySelector(e))
              : null != e.nodeType && (i = e),
            null == i)
          )
            throw new Error(
              `Invalid \`${t}\` option provided. Please provide a CSS selector or a plain HTML element.`
            );
          return i;
        }),
        (n.getElements = function (e, t) {
          let i, s;
          if (e instanceof Array) {
            s = [];
            try {
              for (i of e) s.push(this.getElement(i, t));
            } catch (e) {
              s = null;
            }
          } else if ("string" == typeof e)
            for (i of ((s = []), document.querySelectorAll(e))) s.push(i);
          else null != e.nodeType && (s = [e]);
          if (null == s || !s.length)
            throw new Error(
              `Invalid \`${t}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`
            );
          return s;
        }),
        (n.confirm = function (e, t, i) {
          return window.confirm(e) ? t() : null != i ? i() : void 0;
        }),
        (n.isValidFile = function (e, t) {
          if (!t) return !0;
          t = t.split(",");
          let i = e.type,
            s = i.replace(/\/.*$/, "");
          for (let n of t)
            if (((n = n.trim()), "." === n.charAt(0))) {
              if (
                -1 !==
                e.name
                  .toLowerCase()
                  .indexOf(n.toLowerCase(), e.name.length - n.length)
              )
                return !0;
            } else if (/\/\*$/.test(n)) {
              if (s === n.replace(/\/.*$/, "")) return !0;
            } else if (i === n) return !0;
          return !1;
        }),
        "undefined" != typeof jQuery &&
          null !== jQuery &&
          (jQuery.fn.dropzone = function (e) {
            return this.each(function () {
              return new n(this, e);
            });
          }),
        (n.ADDED = "added"),
        (n.QUEUED = "queued"),
        (n.ACCEPTED = n.QUEUED),
        (n.UPLOADING = "uploading"),
        (n.PROCESSING = n.UPLOADING),
        (n.CANCELED = "canceled"),
        (n.ERROR = "error"),
        (n.SUCCESS = "success");
      var o = function (e, t, i, s, n, l, r, o, a, d) {
        let u = (function (e) {
          e.naturalWidth;
          let t = e.naturalHeight,
            i = document.createElement("canvas");
          (i.width = 1), (i.height = t);
          let s = i.getContext("2d");
          s.drawImage(e, 0, 0);
          let { data: n } = s.getImageData(1, 0, 1, t),
            l = 0,
            r = t,
            o = t;
          for (; o > l; )
            0 === n[4 * (o - 1) + 3] ? (r = o) : (l = o), (o = (r + l) >> 1);
          let a = o / t;
          return 0 === a ? 1 : a;
        })(t);
        return e.drawImage(t, i, s, n, l, r, o, a, d / u);
      };
      class a {
        static initClass() {
          this.KEY_STR =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        }
        static encode64(e) {
          let t,
            i,
            s,
            n,
            l,
            r = "",
            o = "",
            a = "",
            d = 0;
          for (
            ;
            (t = e[d++]),
              (i = e[d++]),
              (o = e[d++]),
              (s = t >> 2),
              (n = ((3 & t) << 4) | (i >> 4)),
              (l = ((15 & i) << 2) | (o >> 6)),
              (a = 63 & o),
              isNaN(i) ? (l = a = 64) : isNaN(o) && (a = 64),
              (r =
                r +
                this.KEY_STR.charAt(s) +
                this.KEY_STR.charAt(n) +
                this.KEY_STR.charAt(l) +
                this.KEY_STR.charAt(a)),
              (t = i = o = ""),
              (s = n = l = a = ""),
              d < e.length;

          );
          return r;
        }
        static restore(e, t) {
          if (!e.match("data:image/jpeg;base64,")) return t;
          let i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
            s = this.slice2Segments(i),
            n = this.exifManipulation(t, s);
          return `data:image/jpeg;base64,${this.encode64(n)}`;
        }
        static exifManipulation(e, t) {
          let i = this.getExifArray(t),
            s = this.insertExif(e, i);
          return new Uint8Array(s);
        }
        static getExifArray(e) {
          let t,
            i = 0;
          for (; i < e.length; ) {
            if (((t = e[i]), (255 === t[0]) & (225 === t[1]))) return t;
            i++;
          }
          return [];
        }
        static insertExif(e, t) {
          let i = e.replace("data:image/jpeg;base64,", ""),
            s = this.decode64(i),
            n = s.indexOf(255, 3),
            l = s.slice(0, n),
            r = s.slice(n),
            o = l;
          return (o = o.concat(t)), (o = o.concat(r)), o;
        }
        static slice2Segments(e) {
          let t = 0,
            i = [];
          for (;;) {
            if ((255 === e[t]) & (218 === e[t + 1])) break;
            if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
            else {
              let s = t + (256 * e[t + 2] + e[t + 3]) + 2,
                n = e.slice(t, s);
              i.push(n), (t = s);
            }
            if (t > e.length) break;
          }
          return i;
        }
        static decode64(e) {
          let t,
            i,
            s,
            n,
            l,
            r = "",
            o = "",
            a = 0,
            d = [];
          for (
            /[^A-Za-z0-9\+\/\=]/g.exec(e) &&
              console.warn(
                "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
              ),
              e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            (s = this.KEY_STR.indexOf(e.charAt(a++))),
              (n = this.KEY_STR.indexOf(e.charAt(a++))),
              (l = this.KEY_STR.indexOf(e.charAt(a++))),
              (o = this.KEY_STR.indexOf(e.charAt(a++))),
              (t = (s << 2) | (n >> 4)),
              (i = ((15 & n) << 4) | (l >> 2)),
              (r = ((3 & l) << 6) | o),
              d.push(t),
              64 !== l && d.push(i),
              64 !== o && d.push(r),
              (t = i = r = ""),
              (s = n = l = o = ""),
              a < e.length;

          );
          return d;
        }
      }
      a.initClass();
      function d(e, t) {
        var i =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!i) {
          if (
            Array.isArray(e) ||
            (i = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return u(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === i && e.constructor && (i = e.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(e);
              if (
                "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return u(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            i && (e = i);
            var s = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return s >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[s++] };
              },
              e: function (e) {
                throw e;
              },
              f: n,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var l,
          r = !0,
          o = !1;
        return {
          s: function () {
            i = i.call(e);
          },
          n: function () {
            var e = i.next();
            return (r = e.done), e;
          },
          e: function (e) {
            (o = !0), (l = e);
          },
          f: function () {
            try {
              r || null == i.return || i.return();
            } finally {
              if (o) throw l;
            }
          },
        };
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
        return s;
      }
      function h(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(i), !0).forEach(function (t) {
                c(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : h(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      function c(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      (n._autoDiscoverFunction = function () {
        if (n.autoDiscover) return n.discover();
      }),
        (function (e, t) {
          let i = !1,
            s = !0,
            n = e.document,
            l = n.documentElement,
            r = n.addEventListener ? "addEventListener" : "attachEvent",
            o = n.addEventListener ? "removeEventListener" : "detachEvent",
            a = n.addEventListener ? "" : "on";
          var d = function (s) {
              if ("readystatechange" !== s.type || "complete" === n.readyState)
                return (
                  ("load" === s.type ? e : n)[o](a + s.type, d, !1),
                  !i && (i = !0) ? t.call(e, s.type || s) : void 0
                );
            },
            u = function () {
              try {
                l.doScroll("left");
              } catch (e) {
                return void setTimeout(u, 50);
              }
              return d("poll");
            };
          if ("complete" !== n.readyState) {
            if (n.createEventObject && l.doScroll) {
              try {
                s = !e.frameElement;
              } catch (e) {}
              s && u();
            }
            n[r](a + "DOMContentLoaded", d, !1),
              n[r](a + "readystatechange", d, !1),
              e[r](a + "load", d, !1);
          }
        })(window, n._autoDiscoverFunction),
        (n.autoDiscover = !1),
        (window.Dropzone = n);
      var m = function (e, t) {
        var i = new XMLHttpRequest();
        i.open("GET", '/storage/'+t, !1),
          (i.onreadystatechange = function () {
            if (4 === i.readyState) {
              var s = 0,
                n = void 0;
              200 === i.status &&
                ((s = i.response.length),
                (n = i.getResponseHeader("Content-Type") || void 0));
              var l = {
                name: t.replace(/^.*[\\\/]/, ""),
                size: s,
                type: n,
                accepted: !0,
              };
              (n && n.startsWith("image/")) || (l.noPreview = !0),
                e.files.push(l),
                e.displayExistingFile(l, t);
            }
          }),
          i.send();
      };
      window.bpFieldInitDropzoneElement = function (e) {
        var t = !!e.data("allow-multiple");
        console.log(t, e.data("allow-multiple"));
        var i = p(
            p({ maxFiles: t ? null : 1 }, e.data("config")),
            {},
            {
              init: function () {
                var t = this;
                setTimeout(function () {
                  !(function (e, t) {
                    var i = t.find("input").data("value");
                    if (i && 0 !== i.length) {
                      var s = e.options.maxFiles;
                      for (var n in i) {
                        if (s && s > 1 && n >= s) break;
                        // puede que i[n] sea un string algo así: ["url1", "url2"], entonces hay que parsear estas urls y llamar a m(e, url)
                        if (typeof i[n] === 'string' && i[n].startsWith("[")) {
                        // Parseamos las URLs del string
                        const urls = JSON.parse(i[n]);
                        // Iteramos sobre cada URL y llamamos a la función m
                        for (let j = 0; j < urls.length; j++) {
                            const url = urls[j];
                            m(e, url);
                        }
                        } else {
                        // Llamamos a la función m pasando e y la URL
                        m(e, i[n]);
                        }
                      }
                    }
                  })(t, e);
                }, 0);
              },
              thumbnail: function (e, t) {
                if (!e.noPreview) return s.thumbnail(e, t);
              },
            }
          ),
          l = new n("#".concat(e.attr("id")), i),
          r = window.$('meta[name="csrf-token"]').attr("content"),
          o = e.find("input").get(0);
        console.log(l),
          l.on("sending", function (e, t, i) {
            i.append("_token", r);
            var s = t.onload;
            t.onload = function (i) {
              s(i);
              var n = JSON.parse(t.responseText);
              "string" == typeof n.name && (e.dataURL = n.path + n.name);
            };
          }),
          l.on("addedfile", function () {
            var e = this.options.maxFiles;
            if (e && !(e < 1))
              for (; this.files.length > e; ) this.removeFile(this.files[0]);
          });
        var a = function () {
          var i = e.find("[data-input-list]"),
            s = o.getAttribute("data-name") + (t ? "[]" : "");
          i.empty();
          var n,
            r = d(l.getAcceptedFiles());
          try {
            for (r.s(); !(n = r.n()).done; ) {
              var a = n.value,
                u = '<input type="hidden" name="'
                  .concat(s, '" value="')
                  .concat(a.dataURL, '">');
              i.append(u);
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
        };
        l.on("removedfile", a),
          l.on("complete", function () {
            setTimeout(a, 0);
          });
      };
    })();
})();
