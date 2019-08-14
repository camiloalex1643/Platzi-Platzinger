import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  imageChangedEvent: any = ''
  croppedImage: any = ''
  picture: any = ''
  constructor(private userService: UserService,
    private authenticationservice: AuthenticationService,
    private firebaseStorage: AngularFireStorage) {
    this.authenticationservice.getStatus().subscribe(
      next => {
        this.userService.getUserById(next.uid).valueChanges().subscribe(
          (next: User) => {
            this.user = next
            console.log(this.user)
          }, error => {
            console.log(error)
          }
        )
      },
      error => {
        console.log(error)
      }
    )
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  saveSettings() {
    if (this.croppedImage) {
      const currentPictureId = Date.now()

      //El ref regresa una promesa
      const pictures = this.firebaseStorage.ref('pictures/' + currentPictureId + '.jpg').putString(this.croppedImage, 'data_url');

      pictures.then(
        onfulfilled => {
          this.picture = this.firebaseStorage.ref('pictures/' + currentPictureId + '.jpg').getDownloadURL()
          this.picture.subscribe(
            p => {
              this.userService.setAvatar(p, this.user.uid).then(
                onfulfilled => {
                  alert('Subio imagen')
                }
              ).catch(
                onrejected => {
                  alert('Error Subio imagen')
                  console.log(onrejected)
                }
              )
            }
          )
        }
      ).catch(
        onrejected => {
          console.log("Error de imagen " + onrejected)
        }
      )
    } else {
      this.userService.editUser(this.user).then(
        onfulfilled => {
          alert('Guardo')
        }
      ).catch(onrejected => {
        alert('Error')
        console.log(onrejected)
      })
    }
  }
  ngOnInit() {
  }

}
