import { Component } from '@angular/core';
import { SidebarNavigation } from './components/sidebar-navigation/sidebar-navigation';
import { Notes } from './notes/notes';
import { INote } from '../../interfaces/i-note';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarNavigation, Notes],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  notes: INote[] = [
    {
      uuid: 'b7f1a2c1-2dd8-4c02-b1af-91e10a22f001',
      title: 'Ideas para nuevo proyecto',
      content: 'Explorar una app de productividad minimalista con sincronización en la nube.',
      tags: ['Proyecto', 'Ideas'],
      updated_at: new Date('2025-01-03'),
      status: 'active',
    },
    {
      uuid: 'c1ab2c44-1b52-4e5e-bbb2-f1dbf67c6002',
      title: 'Lista de compras',
      content: 'Leche, huevos, pan, tomates, pasta, detergente.',
      tags: ['Personal', 'Compras'],
      updated_at: new Date('2025-01-08'),
      status: 'active',
    },
    {
      uuid: 'd02b5c91-7a83-4dc8-9f7f-14abbd1a7003',
      title: 'Tareas pendientes',
      content: 'Revisar correos importantes y preparar reunión del viernes.',
      tags: ['Trabajo'],
      updated_at: new Date('2025-01-10'),
      status: 'archived',
    },
    {
      uuid: 'e9f3c123-45d8-4789-9b33-b19dde4f8004',
      title: 'Ideas de contenido',
      content: 'Crear un artículo sobre accesibilidad en interfaces web.',
      tags: ['Contenido', 'Ideas'],
      updated_at: new Date('2025-01-05'),
      status: 'active',
    },
    {
      uuid: '0fa22c8b-2600-4c52-a3e0-d1b0b8c99005',
      title: 'Notas de la reunión',
      content: 'Puntos clave: automatización, mejoras UX, definición de roadmap Q1.',
      tags: ['Trabajo', 'Reunión'],
      updated_at: new Date('2025-01-07'),
      status: 'archived',
    },
    {
      uuid: '4b8154c2-2ca7-4e25-9e8a-f5dc9e0f2006',
      title: 'Recordatorios de salud',
      content: 'Pedir cita médica y programar análisis rutinarios.',
      tags: ['Salud', 'Personal'],
      updated_at: new Date('2025-01-02'),
      status: 'active',
    },
    {
      uuid: '8e55d9b2-cf36-4ae5-8c26-5c9dd463f007',
      title: 'Recetas para probar',
      content: 'Lasaña vegetariana, curry rojo tailandés, pan casero.',
      tags: ['Cocina'],
      updated_at: new Date('2025-01-06'),
      status: 'active',
    },
    {
      uuid: '2f4a1cb3-93aa-4e97-b0b9-a61e3cc87008',
      title: 'Aprender Angular Signals',
      content: 'Revisar documentación oficial y crear proyecto de prueba.',
      tags: ['Angular', 'Aprendizaje'],
      updated_at: new Date('2025-01-09'),
      status: 'active',
    },
    {
      uuid: '39bb2214-951e-4594-b423-559f8055f009',
      title: 'Plan de viaje',
      content: 'Destino: Lisboa. Buscar alojamiento y planificar rutas a pie.',
      tags: ['Viaje', 'Personal'],
      updated_at: new Date('2025-01-04'),
      status: 'archived',
    },
    {
      uuid: '72c1d44d-7ed8-493f-8f52-9e3da66be010',
      title: 'Investigación de UI',
      content: 'Revisar tendencias de UI 2025 y nuevas herramientas de diseño.',
      tags: ['Diseño', 'Investigación'],
      updated_at: new Date('2025-01-11'),
      status: 'active',
    },
    {
      uuid: '90ae9912-b811-41c1-941f-d24772699011',
      title: 'Mantenimiento del coche',
      content: 'Cambiar aceite y revisar presión de neumáticos.',
      tags: ['Personal', 'Coche'],
      updated_at: new Date('2025-01-01'),
      status: 'archived',
    },
    {
      uuid: 'af2c7783-2770-4b03-b406-e807c342e012',
      title: 'Resumen libro: Atomic Habits',
      content: 'Crear sistemas es clave; pequeños cambios producen grandes resultados.',
      tags: ['Libros', 'Hábitos'],
      updated_at: new Date('2025-01-12'),
      status: 'active',
    },
    {
      uuid: '63b5c1b3-56d6-4e1a-ab70-9fcb6cce3013',
      title: 'Mejoras para portfolio',
      content: 'Agregar proyectos recientes y optimizar SEO.',
      tags: ['Proyecto', 'Portfolio'],
      updated_at: new Date('2025-01-05'),
      status: 'active',
    },
    {
      uuid: 'da55e21f-99cb-414a-900c-8c2b867fe014',
      title: 'Ideas para newsletter',
      content: 'Tema: productividad, herramientas modernas, accesibilidad.',
      tags: ['Contenido', 'Newsletter'],
      updated_at: new Date('2025-01-13'),
      status: 'archived',
    },
    {
      uuid: 'ae9bb3c2-667b-4c5d-9448-cb23acd9f015',
      title: 'Checklist de mudanza',
      content: 'Empacar cocina, organizar documentos, contratar mudanza.',
      tags: ['Personal'],
      updated_at: new Date('2025-01-03'),
      status: 'active',
    },
    {
      uuid: 'fa1cc95d-a3d5-4ccf-84ea-f30677a1f016',
      title: 'Practicar animaciones CSS',
      content: 'Probar transiciones suaves, keyframes y microinteracciones.',
      tags: ['CSS', 'Aprendizaje'],
      updated_at: new Date('2025-01-14'),
      status: 'active',
    },
    {
      uuid: '514008e5-fe6a-461c-85c6-26a66fbd7017',
      title: 'Notas de brainstorming',
      content: 'Explorar gamificación en aplicaciones educativas.',
      tags: ['Ideas', 'Investigación'],
      updated_at: new Date('2025-01-02'),
      status: 'archived',
    },
    {
      uuid: '1c08ae8a-8da4-49a8-b221-cbf95fe8e018',
      title: 'Películas para ver',
      content: 'The Creator, Dune: Part Two, Spider-Verse 3 cuando salga.',
      tags: ['Cine', 'Personal'],
      updated_at: new Date('2025-01-06'),
      status: 'active',
    },
    {
      uuid: 'a5ddb98a-f62c-41fd-9bd4-ec83bae20019',
      title: 'Objetivos del año',
      content: 'Aprender Rust, mejorar nivel de inglés, correr una media maratón.',
      tags: ['Objetivos', 'Personal'],
      updated_at: new Date('2025-01-01'),
      status: 'archived',
    },
    {
      uuid: 'eaf0bb86-5e33-4dfc-96a0-7d8b62895020',
      title: 'Backlog técnico',
      content: 'Actualizar dependencias, revisar deuda técnica del módulo de pagos.',
      tags: ['Trabajo', 'Tech'],
      updated_at: new Date('2025-01-10'),
      status: 'active',
    },
  ];
  editedNotes: INote[] = [];
  tags: string[] = [];
  title: string = 'Todas las notas';
  allNotesInput: boolean = true;
  archiveNotesInput: boolean = false;
  taggedNotesInput: string = '';
  searchNotesInput: boolean = false;

  ngOnInit() {
    this.editedNotes = [...this.notes];
    this.notes.forEach((note) => {
      const tags = note.tags;
      tags.forEach((tag) => {
        if (!this.tags.includes(tag)) this.tags.push(tag);
      });
    });
  }

  onAllNotes() {
    this.title = 'Todas las notas';
    this.editedNotes = this.notes.filter((note) => note.status === 'active');
    this.allNotesInput = true;
    this.archiveNotesInput = false;
    this.taggedNotesInput = '';
    this.searchNotesInput = false;
  }

  onArchivedNotes() {
    this.title = 'Notas archivadas';
    this.editedNotes = this.notes.filter((note) => note.status === 'archived');
    this.allNotesInput = false;
    this.archiveNotesInput = true;
    this.taggedNotesInput = '';
    this.searchNotesInput = false;
  }

  onTaggedNotes(tag: string) {
    this.title = `Notas etiquetadas: ${tag}`;
    this.editedNotes = this.notes.filter((note) => note.tags.includes(tag));
    this.allNotesInput = false;
    this.archiveNotesInput = false;
    this.taggedNotesInput = tag;
    this.searchNotesInput = false;
  }

  onSearchNotes(search: string) {
    this.title = `Mostrando resultados para: ${search}`;
    this.editedNotes = this.notes.filter(
      (note) =>
        note.title.includes(search) ||
        note.content.includes(search) ||
        note.tags.some((tag) => tag.includes(search))
    );
    this.allNotesInput = false;
    this.searchNotesInput = true;
  }

  onCreateNote() {}

  onArchiveNote(note: INote) {}

  onRestoreNote(note: INote) {}

  onDeleteNote(note: INote) {}
}
