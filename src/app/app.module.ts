import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalEComponent } from './Pages/menu-principal-e/components/menu-principal-e.component';
import { GruposComponent } from './Pages/grupos/components/grupos.component';
import { ActualizacionDatosComponent } from './Pages/actualizacion-datos/componets/actualizacion-datos.component';
import { CalendarioAcademicoComponent } from './Pages/calendario-academico/components/calendario-academico.component';
import { CambiarContraComponent } from './Pages/cambiar-contra/components/cambiar-contra.component';
import { NotasComponent } from './Pages/notas/components/notas.component';
import { RegistroUsuarioComponent } from './Pages/registro-usuario/components/registro-usuario.component';
import { SolicitudNuevoIngresoComponent } from './Pages/solicitud-nuevo-ingreso/components/solicitud-nuevo-ingreso.component';
import { LoginComponent } from './Pages/login/components/login.component'
import { MateriasCarreraComponent } from './Pages/materias-carrera/components/materias-carrera.component';
import { PensumCarreraComponent } from './Pages/pensum-carrera/components/pensum-carrera.component';
import { HorariosComponent } from './Pages/horarios/components/horarios.component';
import { RecuperacionClavesComponent } from './Pages/recuperacion-claves/components/recuperacion-claves.component';
import { ActividadesAcademicasComponent } from './Pages/actividades-academicas/components/actividades-academicas.component';
import { NotasModificarComponent } from './Pages/notas-modificar/components/notas-modificar.component';
import { CarrerasComponent } from './Pages/carreras/components/carreras.component';
import { TalonarioComponent } from './Pages/talonario/components/talonario.component';
import { InscripcionAsignaturaHorariosComponent } from './Pages/inscripcion-asignatura-horarios/components/inscripcion-asignatura-horarios.component';
import { ActualizacionDatosEComponent } from './Pages/actualizacion-datos-e/components/actualizacion-datos-e.component';
import { InscripcionCarreraComponent } from './Pages/inscripcion-carrera/components/inscripcion-carrera.component';
import { InscripcionCicloComponent } from './Pages/inscripcion-ciclo/components/inscripcion-ciclo.component';
import { SolicitudCambioCarreraComponent } from './Pages/solicitud-cambio-carrera/components/solicitud-cambio-carrera.component';
import { SolicitudCambioPensumComponent } from './Pages/solicitud-cambio-pensum/components/solicitud-cambio-pensum.component';
import { RetiroAsignaturasComponent } from './Pages/retiro-asignaturas/components/retiro-asignaturas.component';
import { RetiroCicloComponent } from './Pages/retiro-ciclo/components/retiro-ciclo.component';
import { ConsultaHorariosMateriasComponent } from './Pages/consulta-horarios-materias/components/consulta-horarios-materias.component';
import { DocentesComponent } from './Pages/docentes/components/docentes.component';
import { MateriasComponent } from './Pages/materias/components/materias.component';
import { CiclosComponent } from './Pages/ciclos/components/ciclos.component';
import { AsignacionMateriasHorariosDComponent } from './Pages/asignacion-materias-horarios-d/components/asignacion-materias-horarios-d.component';
import { PlanesEstudioComponent } from './Pages/planes-estudio/components/planes-estudio.component';
import { HorariosMateriasComponent } from './Pages/horarios-materias/components/horarios-materias.component';
import { CarnetizacionComponent } from './Pages/carnetizacion/components/carnetizacion.component';
import { ConsultaHorariosMateriasDoComponent } from './Pages/consulta-horarios-materias-do/components/consulta-horarios-materias-do.component';
import { NotasModDComponent } from './Pages/notas-mod-d/components/notas-mod-d.component';
import { EvaluacionesPorcentajesComponent } from './Pages/evaluaciones-porcentajes/components/evaluaciones-porcentajes.component';
import { CreacionPerfilesAdminComponent } from './Pages/creacion-perfiles-admin/components/creacion-perfiles-admin.component';
import { TalonariosPagosComponent } from './Pages/talonarios-pagos/components/talonarios-pagos.component';
import { MatCalendarBody } from '@angular/material/datepicker';

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
    CarnetizacionComponent,
    ConsultaHorariosMateriasDoComponent,
    NotasModDComponent,
    EvaluacionesPorcentajesComponent,
    CreacionPerfilesAdminComponent,
    TalonariosPagosComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
