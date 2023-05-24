import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalEComponent } from './pages/menu-principal-e/menu-principal-e.component';
import { GruposComponent } from './pages/grupos/grupos.component';
import { ActualizacionDatosComponent } from './pages/actualizacion-datos/actualizacion-datos.component';
import { CalendarioAcademicoComponent } from './pages/calendario-academico/calendario-academico.component';
import { CambiarContraComponent } from './pages/cambiar-contra/cambiar-contra.component';
import { NotasComponent } from './pages/notas/notas.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { SolicitudNuevoIngresoComponent } from './pages/solicitud-nuevo-ingreso/solicitud-nuevo-ingreso.component';
import { LoginComponent } from './pages/login/login.component';
import { MateriasCarreraComponent } from './pages/materias-carrera/materias-carrera.component';
import { PensumCarreraComponent } from './pages/pensum-carrera/pensum-carrera.component';
import { HorariosComponent } from './pages/horarios/horarios.component';
import { RecuperacionClavesComponent } from './pages/recuperacion-claves/recuperacion-claves.component';
import { ActividadesAcademicasComponent } from './pages/actividades-academicas/actividades-academicas.component';
import { NotasModificarComponent } from './pages/notas-modificar/notas-modificar.component';
import { CarrerasComponent } from './pages/carreras/carreras.component';
import { TalonarioComponent } from './pages/talonario/talonario.component';
import { InscripcionAsignaturaHorariosComponent } from './pages/inscripcion-asignatura-horarios/inscripcion-asignatura-horarios.component';
import { ActualizacionDatosEComponent } from './pages/actualizacion-datos-e/actualizacion-datos-e.component';
import { InscripcionCarreraComponent } from './pages/inscripcion-carrera/inscripcion-carrera.component';
import { InscripcionCicloComponent } from './pages/inscripcion-ciclo/inscripcion-ciclo.component';
import { SolicitudCambioCarreraComponent } from './pages/solicitud-cambio-carrera/solicitud-cambio-carrera.component';
import { SolicitudCambioPensumComponent } from './pages/solicitud-cambio-pensum/solicitud-cambio-pensum.component';
import { RetiroAsignaturasComponent } from './pages/retiro-asignaturas/retiro-asignaturas.component';
import { RetiroCicloComponent } from './pages/retiro-ciclo/retiro-ciclo.component';
import { ConsultaHorariosMateriasComponent } from './pages/consulta-horarios-materias/consulta-horarios-materias.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { CiclosComponent } from './pages/ciclos/ciclos.component';
import { AsignacionMateriasHorariosDComponent } from './pages/asignacion-materias-horarios-d/asignacion-materias-horarios-d.component';
import { PlanesEstudioComponent } from './pages/planes-estudio/planes-estudio.component';
import { HorariosMateriasComponent } from './pages/horarios-materias/horarios-materias.component';
import { TalonariosComponent } from './pages/talonarios/talonarios.component';
import { CarnetizacionComponent } from './pages/carnetizacion/carnetizacion.component';
import { ConsultaHorariosMateriasDoComponent } from './pages/consulta-horarios-materias-do/consulta-horarios-materias-do.component';
import { NotasModDComponent } from './pages/notas-mod-d/notas-mod-d.component';
import { EvaluacionesPorcentajesComponent } from './pages/evaluaciones-porcentajes/evaluaciones-porcentajes.component';
import { CreacionPerfilesAdminComponent } from './pages/creacion-perfiles-admin/creacion-perfiles-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalEComponent,
    GruposComponent,
    ActualizacionDatosComponent,
    CalendarioAcademicoComponent,
    CambiarContraComponent,
    NotasComponent,
    RegistroUsuarioComponent,
    SolicitudNuevoIngresoComponent,
    LoginComponent,
    MateriasCarreraComponent,
    PensumCarreraComponent,
    HorariosComponent,
    RecuperacionClavesComponent,
    ActividadesAcademicasComponent,
    NotasModificarComponent,
    CarrerasComponent,
    TalonarioComponent,
    InscripcionAsignaturaHorariosComponent,
    ActualizacionDatosEComponent,
    InscripcionCarreraComponent,
    InscripcionCicloComponent,
    SolicitudCambioCarreraComponent,
    SolicitudCambioPensumComponent,
    RetiroAsignaturasComponent,
    RetiroCicloComponent,
    ConsultaHorariosMateriasComponent,
    DocentesComponent,
    MateriasComponent,
    CiclosComponent,
    AsignacionMateriasHorariosDComponent,
    PlanesEstudioComponent,
    HorariosMateriasComponent,
    TalonariosComponent,
    CarnetizacionComponent,
    ConsultaHorariosMateriasDoComponent,
    NotasModDComponent,
    EvaluacionesPorcentajesComponent,
    CreacionPerfilesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
