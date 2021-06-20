import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/shared/models/cita';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas: Observable<Cita[]> | undefined;

  private citasCollection: AngularFirestoreCollection<Cita> | undefined;

  constructor(private readonly afs: AngularFirestore) { 
    this.getCitas();
  }

  onDeleteCitas(item: Cita): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        this.citasCollection = this.afs.collection<Cita>('citas');
        const result = await this.citasCollection.doc(item.id).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  onSaveEmployee(cita: Cita, empId: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.citasCollection = this.afs.collection<Cita>('citas');
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...cita };
        const result = await this.citasCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        alert("Error intentelo nuevamente");
        reject(err.message);
      }
    });
  }


  private getCitas(): void {
    this.citasCollection = this.afs.collection<Cita>('citas');
    this.citas = this.citasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Cita))
    );
  }
}
